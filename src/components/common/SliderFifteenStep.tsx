import { Slider, Typography, type SliderSingleProps } from "antd";
import { useRef, useState } from "react";

export default function SliderFiftenStep() {
  // 15단계
  const marksFiveStep: SliderSingleProps["marks"] = {
    0: "1",
    7: "2",
    14: "3",
    21: "4",
    29: "5",
    36: "6",
    43: "7",
    50: "8",
    57: "9",
    64: "10",
    71: "11",
    79: "12",
    86: "13",
    93: "14",
    100: "15",
  };

  const displayTexts: Record<number, string> = {
    0: "마늘향",
    7: "마늘향2",
    14: "마늘향3",
    21: "마늘향4",
    29: "마늘향5",
    36: "마늘향6",
    43: "마늘향7",
    50: "마늘향8",
    57: "마늘향9",
    64: "마늘향10",
    71: "마늘향11",
    79: "마늘향12",
    86: "마늘향13",
    93: "마늘향14",
    100: "마늘향15",
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
      <div className="slider-wrap slider-fifteen">
        <Typography>{displayTexts[sliderValue]}</Typography>
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
