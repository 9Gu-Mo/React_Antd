interface Props {
  after?: boolean;
}

export default function TastingLabel(prosp: Props) {
  return (
    <>
      <span className={`taste-label ${prosp.after && "after"}`}>{prosp.after ? "시식후" : "시식전"}</span>
    </>
  );
}
