import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPeaceHand(
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
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="M14.149 9.472v-5.86a1.612 1.612 0 10-3.223 0v4.834"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M16.346 12.841l2.176-7.252a1.584 1.584 0 10-3.044-.881l-1.33 4.764M7.62 9.25l1.055 2.341a1.612 1.612 0 01-2.938 1.325L4.68 10.575A1.612 1.612 0 017.62 9.25z"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M11.72 12.261a2.322 2.322 0 00-.068-1.742l-1.073-2.38a1.584 1.584 0 10-2.865 1.35l.135.276"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M13.857 17.677l.492-.984a.176.176 0 00-.108-.248l-3.55-1.044a1.537 1.537 0 01.575-3.004l4.788.445s3.81.586 2.49 4.395c-1.318 3.81-1.757 5.128-4.687 5.128H8.876a4.249 4.249 0 01-4.249-4.249L4.48 9.912"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPeaceHand);
export default ForwardRef;
