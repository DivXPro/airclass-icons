// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopperDiamondFillSvg from '@airclass/icons-svg/lib/asn/CopperDiamondFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopperDiamondFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopperDiamondFillSvg}></AntdIcon>;
};

CopperDiamondFill.displayName = 'CopperDiamondFill';
CopperDiamondFill.inheritAttrs = false;
export default CopperDiamondFill;