import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgChatBubbleTranslate(
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
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.517h5m0 0h3.214m-3.214 0V7m5 1.517h-1.786m0 0c-.586 2.075-1.813 4.037-3.214 5.76m0 0C10.84 15.705 9.561 16.97 8.429 18M12 14.277c-.714-.829-1.714-2.17-2-2.777m2 2.777l2.143 2.206"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChatBubbleTranslate);
export default ForwardRef;
