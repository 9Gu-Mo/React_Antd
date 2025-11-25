import { Slider, type SliderSingleProps } from "antd";

export default function SliderFiveStep() {
  // 5단계
  const marksFiveStep: SliderSingleProps["marks"] = {
    0: "전혀 차이 없음",
    25: "약간의 차이",
    50: "중간 정도 차이",
    75: "상단한 차이",
    100: "극단적인 차이",
  };

  return (
    <>
      <div className="slider-wrap">
        <Slider
          marks={marksFiveStep}
          step={null}
          tooltip={{
            formatter: (value) => marksFiveStep[value as number] as string,
            open: true,
            rootClassName: "tooltip-custom",
          }}
        />
      </div>
    </>
  );
}
