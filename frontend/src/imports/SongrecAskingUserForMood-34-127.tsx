import svgPaths from "./svg-iturtluduq";
import imgImage21 from "figma:asset/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";

function LinearGradientNoiseTexture() {
  return <div className="absolute h-[874px] left-[-24px] top-[-40px] w-[402px]" data-name="Linear Gradient + Noise Texture" style={{ backgroundImage: "linear-gradient(178.465deg, rgb(74, 48, 240) 65.629%, rgba(74, 48, 240, 0.4) 99.391%)" }} />;
}

function Title() {
  return (
    <div className="content-stretch flex font-['Spectral:Regular',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-nowrap" data-name="Title">
      <p className="relative shrink-0">songrec</p>
      <p className="relative shrink-0">curated by tanuj</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="font-['Spectral:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] text-center text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Here’s a perfect popular `}</p>
        <p>sad song for you</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.48px] w-full">
      <p className="overflow-hidden relative shrink-0 w-full">by Anusha Mani, Amit Trivedi</p>
      <p className="overflow-hidden relative shrink-0 w-full">From DevD</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Spectral:Regular',sans-serif] gap-[4px] items-center min-h-px min-w-px not-italic relative text-center text-ellipsis whitespace-nowrap">
      <p className="leading-[28px] overflow-hidden relative shrink-0 text-[24px] text-white tracking-[-0.96px] w-full">Dil Main Jaagi</p>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[24px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[354px] pointer-events-none relative rounded-[32px] shadow-[0px_9.412px_14.118px_0px_rgba(19,15,41,0.5)] shrink-0 w-full" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgImage21} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_12px_8px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <Frame1 />
    </div>
  );
}

function MoodPicker() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Mood Picker">
      <Frame />
      <Frame4 />
    </div>
  );
}

function TitleMoodPicker() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Title + Mood Picker">
      <LinearGradientNoiseTexture />
      <Title />
      <MoodPicker />
    </div>
  );
}

function G1() {
  return (
    <div className="relative size-full" data-name="g12">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6984 19.6984">
        <g id="g12">
          <path d={svgPaths.p2d573100} fill="var(--fill-0, white)" id="path14" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <div className="absolute contents inset-[0.75%_0.75%_0.76%_0.75%]" data-name="g10">
      <div className="absolute flex inset-[0.75%] items-center justify-center">
        <div className="-scale-y-100 flex-none size-[19.698px]">
          <G1 />
        </div>
      </div>
    </div>
  );
}

function SymbolSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Symbol.svg">
      <G />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4a30f0] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[1000px] shrink-0 w-full" data-name="Button">
      <SymbolSvg />
      <p className="font-['Switzer:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.16px] whitespace-nowrap">Add to Spotify</p>
    </div>
  );
}

function Replay() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="replay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="replay">
          <mask height="20" id="mask0_34_131" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_34_131)">
            <path d={svgPaths.p3810fe00} fill="var(--fill-0, white)" fillOpacity="0.8" id="replay_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[1000px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Replay />
      <p className="font-['Switzer:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center tracking-[-0.16px] whitespace-nowrap">Start over</p>
    </div>
  );
}

function SongPopularitySliderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Song popularity slider + Button">
      <Button />
      <Button1 />
    </div>
  );
}

export default function SongrecAskingUserForMood() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-between overflow-clip px-[24px] py-[40px] relative rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Songrec/asking_user_for_mood">
      <TitleMoodPicker />
      <SongPopularitySliderButton />
    </div>
  );
}