// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldCrossFillSvg from '@airclass/icons-svg/lib/asn/ShieldCrossFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldCrossFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossFillSvg}></AntdIcon>;
};

ShieldCrossFill.displayName = 'ShieldCrossFill';
ShieldCrossFill.inheritAttrs = false;
export default ShieldCrossFill;