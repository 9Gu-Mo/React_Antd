interface Props {
  size?: number;
  color?: string;
}

export default function IconArrowLeft(props: Props) {
  return (
    <>
      <svg
        width={props.size ? props.size : "24"}
        height={props.size ? props.size : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_16_1352)">
          <path
            d="M16 4L8 12L16 20"
            stroke={props.color ? props.color : "#222"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_1352">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
