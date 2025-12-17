import { Slider, Typography, type SliderSingleProps } from "antd";
import { useRef, useState } from "react";

export default function SliderFiveStep() {
  // 5단계
  const marksFiveStep: SliderSingleProps["marks"] = {
    0: "1",
    25: "2",
    50: "3",
    75: "4",
    100: "5",
  };

  const displayTexts: Record<number, string> = {
    0: "전혀 차이 없음",
    25: "약간의 차이",
    50: "중간 정도 차이",
    75: "상단한 차이",
    100: "극단적인 차이",
  };

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const timeRef = useRef<number | null>(null);

  const handleChange = (value: number) => {
    setSliderValue(value);
    setTooltipOpen(true);

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setTooltipOpen(false);
      timeRef.current = null;
    }, 1000);
  };

  return (
    <>
      <div className="slider-wrap">
        <Typography>{displayTexts[sliderValue] as string}</Typography>
        <Slider
          marks={marksFiveStep}
          step={null}
          value={sliderValue}
          onChange={handleChange}
          tooltip={{
            open: tooltipOpen,
            formatter: (value) => displayTexts[value as number] as string,
            rootClassName: "ant-tooltip-custom",
            placement: "top",
          }}
        />
      </div>
    </>
  );
}
