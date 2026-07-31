export function getAlbumSlideMotion(
  tilt: { rotateX: number; rotateY: number },
  isActive: boolean,
) {
  return {
    rotateX: isActive ? tilt.rotateX : 0,
    rotateY: isActive ? tilt.rotateY : 0,
    opacity: 1,
  };
}
