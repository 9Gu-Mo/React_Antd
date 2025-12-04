interface Props {
  size?: number;
  color?: string;
}

export default function IconClose(props: Props) {
  return (
    <>
      <svg
        width={props.size ? props.size : "20"}
        height={props.size ? props.size : "20"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3L17 17"
          stroke={props.color ? props.color : "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3L3 17"
          stroke={props.color ? props.color : "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
