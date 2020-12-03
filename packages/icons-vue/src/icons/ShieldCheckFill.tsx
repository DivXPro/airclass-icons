// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldCheckFillSvg from '@airclass/icons-svg/lib/asn/ShieldCheckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldCheckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCheckFillSvg}></AntdIcon>;
};

ShieldCheckFill.displayName = 'ShieldCheckFill';
ShieldCheckFill.inheritAttrs = false;
export default ShieldCheckFill;