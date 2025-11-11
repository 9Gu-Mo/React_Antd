interface Props {
  size?: number;
  color?: string;
}

export default function IconGlobal(props: Props) {
  return (
    <>
      <svg
        width={props.size ? props.size : "24"}
        height={props.size ? props.size : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3_2875)">
          <path
            d="M16 12C16 16.9719 14.2113 21 12 21C9.7887 21 8 16.9719 8 12C8 7.02813 9.79361 3 12 3C14.2064 3 16 7.02813 16 12Z"
            stroke={props.color ? props.color : "#333333"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.42847 9.14258H20.5713"
            stroke={props.color ? props.color : "#333333"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.42847 14.8574H20.5713"
            stroke={props.color ? props.color : "#333333"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="9" stroke={props.color ? props.color : "#333333"} strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_2875">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
