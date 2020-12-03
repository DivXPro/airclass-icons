// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WifiOffFillSvg from '@airclass/icons-svg/lib/asn/WifiOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiOffFillSvg}></AntdIcon>;
};

WifiOffFill.displayName = 'WifiOffFill';
WifiOffFill.inheritAttrs = false;
export default WifiOffFill;