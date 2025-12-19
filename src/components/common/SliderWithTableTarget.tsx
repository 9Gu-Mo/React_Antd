// hook
import { useRef, useState } from "react";

// lib
import { Slider, Typography, type SliderSingleProps } from "antd";

/**
 *
 */
export default function SliderWithTableTarget() {
  // 10단계
  const marksTenStep: SliderSingleProps["marks"] = {
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
    0: " ",
    11: " ",
    22: "대체로 구현되지 않음",
    33: " ",
    44: "일부 특성은 구현되었으나, 일부는 구현되지 않음",
    55: " ",
    66: " ",
    77: "대체로 구현됨",
    88: " ",
    100: "매우 잘 구현됨",
  };

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 배열 index 번호 추출
  const arrKey = Object.keys(marksTenStep).map(Number);

  const handleChange = (value: number) => {
    setSliderValue(value);

    const newIndex = arrKey.indexOf(value);
    console.log("newIndex", newIndex);

    // 조건문 수정 예정
    if (targetIndex.includes(newIndex)) {
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setTooltipOpen(false);
      timeRef.current = null;
    }, 1000);
  };

  // const arrKey = Object.keys(marksTenStep).map(Number);
  const curIndex = arrKey.indexOf(sliderValue);
  const targetIndex = [2, 4, 7, 9];

  return (
    <>
      <div className="slider-wrap slider-wrap-tbl">
        <Typography>
          {/* 연산자 수정 예정 */}
          {`${marksTenStep[sliderValue]}${targetIndex.includes(curIndex) ? " / " : ""}${displayTexts[sliderValue]}`}
        </Typography>
        <Slider
          marks={marksTenStep}
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
        <div className="tbl">
          <table>
            <colgroup>
              <col width={"25%"} />
              <col width={"75%"} />
            </colgroup>
            <thead>
              <tr>
                <th>점수</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>대체로 구현되지 않음</td>
              </tr>
              <tr>
                <td>4</td>
                <td>일부 특성은 구현되었으나, 일부는 구현되지 않음</td>
              </tr>
              <tr>
                <td>7</td>
                <td>대체로 구현됨</td>
              </tr>
              <tr>
                <td>9</td>
                <td>매우 잘 구현됨</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
