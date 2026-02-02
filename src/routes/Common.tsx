import AntdModal from "../components/common/AntdModal";
import AntdSlider from "../components/common/AntdSlider";
import AntdSteps from "../components/common/AntdSteps";
import AntdTooltip from "../components/common/AntdTooltip";
import DndEx from "../components/common/DndEx";
import DndRanking from "../components/common/DndRanking";
import TableSeparation from "../components/common/TableSeparation";

export default function Common() {
  return (
    <>
      <AntdSteps />
      <AntdModal />
      <TableSeparation />
      <AntdSlider />
      <AntdTooltip />
      <DndEx />
      <DndRanking />
    </>
  );
}
