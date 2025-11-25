import { useEffect, useRef, useState } from "react";
import TableTop from "./TableTop";
import TableBot from "./TableBot";

export default function TableSeparation() {
  const [open, setOpen] = useState(false);

  const tblRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (tblRef.current) {
      if (open) {
        const scrollHeight = tblRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen}>{open ? "접기" : "펼치기"}</button>
      <TableTop />
      <div ref={tblRef} style={{ height: height, overflow: "hidden", transition: "all 0.5s ease" }}>
        <TableBot />
      </div>
    </div>
  );
}
