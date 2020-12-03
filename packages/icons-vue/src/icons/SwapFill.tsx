// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwapFillSvg from '@airclass/icons-svg/lib/asn/SwapFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapFillSvg}></AntdIcon>;
};

SwapFill.displayName = 'SwapFill';
SwapFill.inheritAttrs = false;
export default SwapFill;