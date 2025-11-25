import AntdButton from "../components/common/AntdButton";
import AntdCheckWrap from "../components/common/AntdCheckWrap";
import AntdInputWrap from "../components/common/AntdInputWrap";
import AntdModal from "../components/common/AntdModal";
import AntdRadio from "../components/common/AntdRadio";
import AntdSelect from "../components/common/AntdSelect";
import AntdSlider from "../components/common/AntdSlider";
import AntdSteps from "../components/common/AntdSteps";
import AntdTable from "../components/common/AntdTable";
import TableCoales from "../components/common/TableCoales";
import TableSeparation from "../components/common/TableSeparation";

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
      <AntdTable />
      <TableSeparation />
      <TableCoales />
      <AntdSlider />
      <div style={{ height: "500px" }}></div>
    </>
  );
}
