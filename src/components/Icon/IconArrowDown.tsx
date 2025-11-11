interface Props {
  size?: number;
  color?: string;
}

export default function IconArrowDown(props: Props) {
  return (
    <>
      <svg
        width={props.size ? props.size : "12"}
        height={props.size ? props.size : "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4L6 8L2 4"
          stroke={props.color ? props.color : "#333333"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
