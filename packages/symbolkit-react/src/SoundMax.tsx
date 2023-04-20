import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSoundMax(
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
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M1 10.657V9.343c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874c.428-.218.988-.218 2.108-.218h1.52c.178 0 .268 0 .354-.015a1 1 0 00.223-.067c.08-.035.155-.084.304-.182l4.918-3.243c.807-.532 1.21-.798 1.544-.777a1 1 0 01.735.396c.202.267.202.75.202 1.716V16.03c0 .966 0 1.449-.202 1.716a1 1 0 01-.735.396c-.334.021-.737-.245-1.544-.777l-4.918-3.243h0a2.098 2.098 0 00-.304-.182 1.002 1.002 0 00-.223-.067c-.086-.015-.176-.015-.354-.015H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C1 12.337 1 11.777 1 10.657z"
        stroke="#000"
      />
      <path
        d="M17 6s1.5 1.5 1.5 4-1.5 4-1.5 4M20 3s2.5 2.5 2.5 7-2.5 7-2.5 7M24 1s3 3.214 3 9-3 9-3 9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoundMax);
export default ForwardRef;
