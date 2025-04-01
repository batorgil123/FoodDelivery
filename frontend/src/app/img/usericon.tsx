import * as React from "react";
import { SVGProps } from "react";
const Usericon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
      fill="#EF4444"
    />
    <path
      d="M22.6667 24V22.6667C22.6667 21.9594 22.3858 21.2811 21.8857 20.781C21.3856 20.281 20.7073 20 20 20H16C15.2928 20 14.6145 20.281 14.1144 20.781C13.6143 21.2811 13.3334 21.9594 13.3334 22.6667V24M20.6667 14.6667C20.6667 16.1394 19.4728 17.3333 18 17.3333C16.5273 17.3333 15.3334 16.1394 15.3334 14.6667C15.3334 13.1939 16.5273 12 18 12C19.4728 12 20.6667 13.1939 20.6667 14.6667Z"
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Usericon;
