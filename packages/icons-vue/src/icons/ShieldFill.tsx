// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldFillSvg from '@airclass/icons-svg/lib/asn/ShieldFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldFillSvg}></AntdIcon>;
};

ShieldFill.displayName = 'ShieldFill';
ShieldFill.inheritAttrs = false;
export default ShieldFill;