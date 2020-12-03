// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VipDiamondFillSvg from '@airclass/icons-svg/lib/asn/VipDiamondFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipDiamondFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VipDiamondFillSvg}></AntdIcon>;
};

VipDiamondFill.displayName = 'VipDiamondFill';
VipDiamondFill.inheritAttrs = false;
export default VipDiamondFill;