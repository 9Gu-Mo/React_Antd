import { Slider, Typography, type SliderSingleProps } from "antd";
import { useState } from "react";

export default function SliderFiveStep() {
  // 5단계
  const marksFiveStep: SliderSingleProps["marks"] = {
    0: "전혀 차이 없음",
    25: "약간의 차이",
    50: "중간 정도 차이",
    75: "상단한 차이",
    100: "극단적인 차이",
  };

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <>
      <div className="slider-wrap">
        <Typography>{marksFiveStep[sliderValue] as string}</Typography>
        <div
          onPointerDown={() => setTooltipOpen(true)} // 터치/마우스 모두 대응
          onPointerUp={() => setTooltipOpen(false)}
        >
          <Slider
            marks={marksFiveStep}
            step={null}
            value={sliderValue}
            onChange={(value) => setSliderValue(value)}
            onChangeComplete={() => setTooltipOpen(false)} // 드래그 완료 시
            tooltip={{
              open: tooltipOpen,
              formatter: (value) => marksFiveStep[value as number] as string,
              rootClassName: "ant-tooltip-custom",
            }}
          />
        </div>
      </div>
    </>
  );
}
