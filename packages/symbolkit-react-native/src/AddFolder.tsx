import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgAddFolder(
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
        d="M18 6h2m2 0h-2m0 0V4m0 2v2M18.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 18.48 2 17.92 2 16.8v-2.6c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 11 4.08 11 5.2 11h13.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 12.52 22 13.08 22 14.2v2.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 20 19.92 20 18.8 20z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14.5V7.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 4 4.08 4 5.2 4h2.616c.438 0 .658 0 .866.045a2 2 0 01.53.196c.188.102.354.244.687.53L11.6 6.23c.333.285.5.427.687.529.166.09.345.156.53.196.209.045.428.045.866.045H14"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAddFolder);
export default ForwardRef;
