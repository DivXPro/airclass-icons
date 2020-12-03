// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwapLineSvg from '@airclass/icons-svg/lib/asn/SwapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapLineSvg}></AntdIcon>;
};

SwapLine.displayName = 'SwapLine';
SwapLine.inheritAttrs = false;
export default SwapLine;