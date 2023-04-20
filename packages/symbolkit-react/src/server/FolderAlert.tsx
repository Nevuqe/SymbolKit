import * as React from "react";
function SvgFolderAlert(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M18 3v4M18 11.01l.01-.011M22 7v9.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 20 19.92 20 18.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 18.48 2 17.92 2 16.8V7.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7h-.316c-.438 0-.657 0-.866-.045a1.998 1.998 0 01-.53-.196c-.188-.102-.354-.244-.687-.53L9.9 4.77c-.333-.285-.5-.427-.687-.529a2 2 0 00-.53-.196C8.474 4 8.254 4 7.816 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 5.52 2 6.08 2 7.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 11 4.08 11 5.2 11H14"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFolderAlert);
export default ForwardRef;
