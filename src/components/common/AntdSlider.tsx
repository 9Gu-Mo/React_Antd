import { Slider } from "antd";

export default function AntdSlider() {
  return (
    <>
      <div className="slider-wrap">
        <Slider step={10} />
      </div>
    </>
  );
}
