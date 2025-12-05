import { Slider, Typography, type SliderSingleProps } from "antd";
import { useState } from "react";

export default function SliderNineStep() {
  // 9단계
  const marksNineStep: SliderSingleProps["marks"] = {
    0: "Weak",
    13: " ",
    25: " ",
    38: " ",
    50: "Control",
    63: " ",
    75: " ",
    88: " ",
    100: "Strong",
  };

  const displayTexts: Record<number, string> = {
    0: "마늘향",
    13: "마늘향1",
    25: "마늘향2",
    38: "마늘향3",
    50: "마늘향4",
    63: "마늘향5",
    75: "마늘향6",
    88: "마늘향7",
    100: "마늘향8",
  };

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleChange = (value: number) => {
    setSliderValue(value);
    setTooltipOpen(true);

    setTimeout(() => {
      setTooltipOpen(false);
    }, 1000);
  };

  return (
    <>
      <div className="slider-wrap">
        <Typography>{displayTexts[sliderValue]}</Typography>
        <Slider
          marks={marksNineStep}
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
