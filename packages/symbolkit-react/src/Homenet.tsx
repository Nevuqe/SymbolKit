import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHomenet(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10M13 2.05S16 6 16 12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12M2.63 8.5h18.74M15.778 20.564l-.739-5.455c-.014-.102-.02-.153-.007-.196a.2.2 0 01.066-.096c.035-.028.085-.04.185-.063l3.144-.737c.027-.006.04-.01.055-.01a.189.189 0 01.036 0c.014 0 .028.004.055.01l3.144.737c.1.024.15.035.185.063a.2.2 0 01.066.096c.014.043.007.094-.007.196l-.739 5.455C21.195 20.767 21.028 22 18.5 22s-2.695-1.233-2.722-1.436z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHomenet);
export default ForwardRef;
