// hook
import { useRef, useState } from "react";
// lib
import { Slider, Typography, type SliderSingleProps } from "antd";
/**
 *
 */
export default function SliderWithTable() {
  // 9단계
  const marksNineStep: SliderSingleProps["marks"] = {
    0: "0",
    13: "1",
    25: "2",
    38: "3",
    50: "4",
    63: "5",
    75: "6",
    88: "7",
    100: "8",
  };
  const displayTexts: Record<number, string> = {
    0: "차이 전혀 없음",
    13: "",
    25: "미세한 차이",
    38: "",
    50: "중간정도의 차이",
    63: "",
    75: "큰 차이",
    88: "",
    100: "매우 큰 차이",
  };

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 배열 index 번호 추출
  const arrKey = Object.keys(marksNineStep).map(Number);

  const handleChange = (value: number) => {
    setSliderValue(value);

    const newIndex = arrKey.indexOf(value);
    console.log("curIndex", newIndex);

    if (newIndex % 2 === 0) {
      setTooltipOpen(true);
      console.log("curIndex even", newIndex);
    } else {
      setTooltipOpen(false);
      console.log("curIndex odd", newIndex);
    }

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setTooltipOpen(false);
      timeRef.current = null;
    }, 1000);
  };

  const curIndex = arrKey.indexOf(sliderValue);

  const displayLabel =
    (marksNineStep[sliderValue] ?? "") + (curIndex % 2 === 0 ? " / " : "") + (displayTexts[sliderValue] ?? "");

  return (
    <>
      <div className="slider-wrap slider-wrap-tbl">
        <Typography>{displayLabel}</Typography>
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
                <td>0</td>
                <td>차이 전혀 없음</td>
              </tr>
              <tr>
                <td>2</td>
                <td>미세한 차이</td>
              </tr>
              <tr>
                <td>4</td>
                <td>중간정도의 차이</td>
              </tr>
              <tr>
                <td>6</td>
                <td>큰 차이</td>
              </tr>
              <tr>
                <td>8</td>
                <td>매우 큰 차이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
