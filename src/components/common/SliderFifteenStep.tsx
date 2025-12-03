import { Slider, Typography, type SliderSingleProps } from "antd";
import { useState } from "react";

export default function SliderFiftenStep() {
  // 5단계
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

  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <>
      <div className="slider-wrap slider-fifteen">
        <Typography>{marksFiveStep[sliderValue] as string}</Typography>
        <Slider
          marks={marksFiveStep}
          step={null}
          onChange={(value) => setSliderValue(value)}
          tooltip={{
            formatter: (value) => marksFiveStep[value as number] as string,
            open: true,
            rootClassName: "ant-tooltip-custom",
          }}
        />
      </div>
    </>
  );
}
