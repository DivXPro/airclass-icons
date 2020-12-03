// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VipDiamondLineSvg from '@airclass/icons-svg/lib/asn/VipDiamondLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipDiamondLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VipDiamondLineSvg}></AntdIcon>;
};

VipDiamondLine.displayName = 'VipDiamondLine';
VipDiamondLine.inheritAttrs = false;
export default VipDiamondLine;