import AntdButton from "../components/common/AntdButton";
import AntdCheckWrap from "../components/common/AntdCheckWrap";
import AntdInputWrap from "../components/common/AntdInputWrap";
import AntdModal from "../components/common/AntdModal";
import AntdRadio from "../components/common/AntdRadio";
import AntdSelect from "../components/common/AntdSelect";
import AntdSteps from "../components/common/AntdSteps";
import DndEx from "../components/common/DndEx";

export default function Common() {
  return (
    <>
      <AntdButton />
      <AntdInputWrap />
      <AntdSelect />
      <AntdCheckWrap />
      <AntdRadio />
      <AntdSteps />
      <AntdModal />
      <DndEx />
    </>
  );
}
