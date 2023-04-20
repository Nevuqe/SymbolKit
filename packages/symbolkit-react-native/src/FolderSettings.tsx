import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFolderSettings(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M5.2 4h2.616c.438 0 .658 0 .866.045a2 2 0 01.53.196c.188.102.354.244.687.53h0L11.6 6.23c.333.285.5.427.687.529.166.09.345.156.53.196.209.045.428.045.866.045H20a2 2 0 110 4H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 9.48 2 8.92 2 7.8v-.6c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 4 4.08 4 5.2 4zM22 10v4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 20 4.08 20 5.2 20H13M19 21a2 2 0 100-4 2 2 0 000 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 22a3 3 0 100-6 3 3 0 000 6z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.3 2"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgFolderSettings);
export default ForwardRef;
