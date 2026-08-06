import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import {
  animate as animateMotion,
  motion,
  useMotionValue,
} from "motion/react";
import {
  getDiscoveryArtworkReleaseVelocity,
  getDiscoveryCardDragOffset,
  getDiscoveryGesture,
  getDiscoveryStackCardState,
  getDiscoveryStackCycleState,
  type DiscoveryDeckTuning,
  type DiscoveryGesture,
  type DiscoveryStackInteractionTuning,
  type DiscoveryStackCyclePhase,
} from "../lib/discovery-deck";

const CYCLE_LIFT_TRANSITION = {
  duration: 0.09,
  ease: [0.2, 0.8, 0.2, 1] as const,
};

interface DiscoveryStackAnimationTuning {
  stackSpring: {
    visualDuration: number;
    bounce: number;
  };
  cycleLiftDuration: number;
  cycleSettleSpring: {
    visualDuration: number;
    bounce: number;
  };
  dragReturnSpring: {
    stiffness: number;
    damping: number;
    mass: number;
  };
}

interface PointerGesture {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  velocityX: number;
  velocityY: number;
}

export interface DiscoveryStackItem {
  id: string;
  image: string;
  alt: string;
}

interface ElasticStackCardProps {
  canDrag: boolean;
  children: ReactNode;
  onCycle: (direction: Exclude<DiscoveryGesture, null>) => void;
  shouldReduceMotion: boolean;
  swipeThresholdPx: number;
  interactionTuning: DiscoveryStackInteractionTuning;
  animationTuning: DiscoveryStackAnimationTuning;
}

function updatePointerVelocity(
  gesture: PointerGesture,
  clientX: number,
  clientY: number,
  timeStamp: number,
) {
  const elapsedMs = Math.max(1, timeStamp - gesture.lastTime);
  const smoothing = 0.35;
  const nextVelocityX = (clientX - gesture.lastX) / elapsedMs * 1000;
  const nextVelocityY = (clientY - gesture.lastY) / elapsedMs * 1000;

  gesture.velocityX = gesture.velocityX * (1 - smoothing) + nextVelocityX * smoothing;
  gesture.velocityY = gesture.velocityY * (1 - smoothing) + nextVelocityY * smoothing;
  gesture.lastX = clientX;
  gesture.lastY = clientY;
  gesture.lastTime = timeStamp;
}

function ElasticStackCard({
  canDrag,
  children,
  onCycle,
  shouldReduceMotion,
  swipeThresholdPx,
  interactionTuning,
  animationTuning,
}: ElasticStackCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const pointerGestureRef = useRef<PointerGesture | null>(null);

  const returnToOrigin = useCallback((velocityX = 0, velocityY = 0) => {
    animateMotion(x, 0, {
      ...animationTuning.dragReturnSpring,
      velocity: getDiscoveryArtworkReleaseVelocity(velocityX),
    });
    animateMotion(y, 0, {
      ...animationTuning.dragReturnSpring,
      velocity: getDiscoveryArtworkReleaseVelocity(velocityY),
    });
  }, [animationTuning.dragReturnSpring, x, y]);

  const finishGesture = useCallback((
    event: ReactPointerEvent<HTMLDivElement>,
    allowCycle: boolean,
  ) => {
    const gesture = pointerGestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    updatePointerVelocity(gesture, event.clientX, event.clientY, event.timeStamp);
    pointerGestureRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const direction = allowCycle
      ? getDiscoveryGesture({
          startX: gesture.startX,
          endX: event.clientX,
          startY: gesture.startY,
          endY: event.clientY,
        }, swipeThresholdPx)
      : null;

    returnToOrigin(gesture.velocityX, gesture.velocityY);
    if (direction !== null) onCycle(direction);
  }, [onCycle, returnToOrigin, swipeThresholdPx]);

  return (
    <motion.div
      className="absolute inset-0"
      onPointerDown={(event) => {
        if (!canDrag || event.button !== 0) return;
        event.stopPropagation();
        pointerGestureRef.current = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          lastX: event.clientX,
          lastY: event.clientY,
          lastTime: event.timeStamp,
          velocityX: 0,
          velocityY: 0,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        const gesture = pointerGestureRef.current;
        if (!canDrag || !gesture || gesture.pointerId !== event.pointerId) return;
        event.stopPropagation();
        event.preventDefault();
        updatePointerVelocity(gesture, event.clientX, event.clientY, event.timeStamp);
        const deltaX = event.clientX - gesture.startX;
        const deltaY = event.clientY - gesture.startY;
        if (!shouldReduceMotion) {
          const offset = getDiscoveryCardDragOffset(deltaX, deltaY, interactionTuning);
          x.set(offset.x);
          y.set(offset.y);
        }
      }}
      onPointerUp={(event) => {
        event.stopPropagation();
        finishGesture(event, true);
      }}
      onPointerCancel={(event) => {
        event.stopPropagation();
        finishGesture(event, false);
      }}
      style={{
        touchAction: canDrag ? "none" : undefined,
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}

export function DiscoveryCardStack({
  borderRadiusPx,
  cardInsetPercent,
  cyclingCardIndex,
  cyclingDirection,
  items,
  onCycle,
  onCycleComplete,
  order,
  shouldReduceMotion,
  swipeThresholdPx,
  tuning,
  interactionTuning,
  animationTuning,
}: {
  borderRadiusPx: number;
  cardInsetPercent: number;
  cyclingCardIndex: number | null;
  cyclingDirection: Exclude<DiscoveryGesture, null> | null;
  items: readonly DiscoveryStackItem[];
  onCycle: (cardIndex: number, direction: Exclude<DiscoveryGesture, null>) => void;
  onCycleComplete: (cardIndex: number) => void;
  order: readonly number[];
  shouldReduceMotion: boolean;
  swipeThresholdPx: number;
  tuning: DiscoveryDeckTuning;
  interactionTuning: DiscoveryStackInteractionTuning;
  animationTuning: DiscoveryStackAnimationTuning;
}) {
  const [cyclePhase, setCyclePhase] = useState<DiscoveryStackCyclePhase>("lift");
  const visibleOrder = order.length === items.length
    ? order
    : items.map((_, index) => index);
  const isCycleActive = cyclingCardIndex !== null;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="absolute inset-0"
      data-slot="discovery-deck"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
    >
      {items.map((item, cardIndex) => {
        const position = Math.max(0, visibleOrder.indexOf(cardIndex));
        const isCyclingCard = cyclingCardIndex === cardIndex;
        const state = getDiscoveryStackCardState(
          position,
          items.length,
          isCyclingCard,
          isCycleActive,
          tuning,
        );
        const isTopCard = position === 0;
        const animationState = isCyclingCard && cyclingDirection !== null
          ? getDiscoveryStackCycleState(
              cyclingDirection,
              cyclePhase,
              state,
              items.length,
              interactionTuning,
            )
          : state;
        const transition = shouldReduceMotion
          ? { duration: 0 }
          : isCyclingCard
            ? cyclePhase === "lift"
              ? {
                  duration: animationTuning.cycleLiftDuration,
                  ease: CYCLE_LIFT_TRANSITION.ease,
                }
              : animationTuning.cycleSettleSpring
            : animationTuning.stackSpring;

        return (
          <motion.div
            animate={{
              x: animationState.x,
              y: animationState.y,
              rotate: animationState.rotate,
              scale: animationState.scale,
              opacity: animationState.opacity,
            }}
            className="absolute"
            data-active={isTopCard ? "true" : "false"}
            data-cycling={isCyclingCard ? "true" : "false"}
            data-cycle-phase={isCyclingCard ? cyclePhase : undefined}
            data-slot="discovery-card"
            initial={false}
            key={item.id}
            onAnimationComplete={() => {
              if (!isCyclingCard) return;
              if (cyclePhase === "lift") {
                setCyclePhase("settle");
                return;
              }
              setCyclePhase("lift");
              onCycleComplete(cardIndex);
            }}
            style={{
              inset: String(cardInsetPercent) + "%",
              borderRadius: borderRadiusPx,
              transformOrigin: "50% 50%",
              willChange: "transform, opacity",
              zIndex: animationState.zIndex,
            }}
            transition={transition}
          >
            <ElasticStackCard
              canDrag={state.canDrag}
              onCycle={(direction) => onCycle(cardIndex, direction)}
              shouldReduceMotion={shouldReduceMotion}
              swipeThresholdPx={swipeThresholdPx}
              interactionTuning={interactionTuning}
              animationTuning={animationTuning}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: borderRadiusPx }}
              >
                <img
                  alt={isTopCard ? item.alt : ""}
                  className="absolute inset-0 size-full max-w-none object-cover"
                  draggable={false}
                  src={item.image}
                  style={{ borderRadius: borderRadiusPx }}
                />
              </div>
            </ElasticStackCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
