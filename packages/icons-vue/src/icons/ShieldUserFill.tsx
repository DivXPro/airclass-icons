// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldUserFillSvg from '@airclass/icons-svg/lib/asn/ShieldUserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldUserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldUserFillSvg}></AntdIcon>;
};

ShieldUserFill.displayName = 'ShieldUserFill';
ShieldUserFill.inheritAttrs = false;
export default ShieldUserFill;