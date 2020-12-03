// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwapBoxLineSvg from '@airclass/icons-svg/lib/asn/SwapBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapBoxLineSvg}></AntdIcon>;
};

SwapBoxLine.displayName = 'SwapBoxLine';
SwapBoxLine.inheritAttrs = false;
export default SwapBoxLine;