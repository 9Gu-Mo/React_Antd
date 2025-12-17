import { Slider, Typography, type SliderSingleProps } from "antd";
import { useRef, useState } from "react";

export default function SliderTenStep() {
  // 10단계
  const marksNineStep: SliderSingleProps["marks"] = {
    0: "0",
    11: "1",
    22: "2",
    33: "3",
    44: "4",
    55: "5",
    66: "6",
    77: "7",
    88: "8",
    100: "9",
  };

  const displayTexts: Record<number, string> = {
    0: "마늘향",
    11: "마늘향1",
    22: "마늘향2",
    33: "마늘향3",
    44: "마늘향4",
    55: "마늘향5",
    66: "마늘향6",
    77: "마늘향7",
    88: "마늘향8",
    100: "마늘향9",
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
