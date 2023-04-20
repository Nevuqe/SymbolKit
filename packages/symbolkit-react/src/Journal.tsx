import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgJournal(
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
        d="M6 6h12M6 10h12M13 14h5M13 18h5M2 18.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 2 4.08 2 5.2 2h13.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 3.52 22 4.08 22 5.2v13.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 22 19.92 22 18.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 20.48 2 19.92 2 18.8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.5v-1c0-.466 0-.699.076-.883a1 1 0 01.541-.54C6.801 14 7.034 14 7.5 14s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 01-.541.54C8.199 18 7.966 18 7.5 18s-.699 0-.883-.076a1 1 0 01-.54-.541C6 17.199 6 16.966 6 16.5z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgJournal);
export default ForwardRef;
