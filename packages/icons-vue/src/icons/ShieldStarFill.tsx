// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldStarFillSvg from '@airclass/icons-svg/lib/asn/ShieldStarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldStarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldStarFillSvg}></AntdIcon>;
};

ShieldStarFill.displayName = 'ShieldStarFill';
ShieldStarFill.inheritAttrs = false;
export default ShieldStarFill;