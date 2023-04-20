import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgJournalPage(
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
        d="M6 6h8M6 10h12M13 14h5M13 18h5M2 18.78V5.22c0-1.139 0-1.708.225-2.142a2 2 0 01.853-.853C3.512 2 4.081 2 5.22 2h11.946c.498 0 .746 0 .98.057a2 2 0 01.564.234c.206.125.381.3.733.652l1.614 1.614h0c.352.352.527.527.652.733.107.175.185.365.234.564.057.234.057.482.057.98V18.78c0 1.139 0 1.708-.225 2.142a2 2 0 01-.853.853C20.488 22 19.919 22 18.78 22H5.22c-1.139 0-1.708 0-2.142-.225a2 2 0 01-.853-.853C2 20.488 2 19.919 2 18.78z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 16.5v-1c0-.466 0-.699.076-.883a1 1 0 01.541-.54C6.801 14 7.034 14 7.5 14s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 01-.541.54C8.199 18 7.966 18 7.5 18s-.699 0-.883-.076a1 1 0 01-.54-.541C6 17.199 6 16.966 6 16.5zM18 2.5v2.9a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgJournalPage);
export default ForwardRef;
