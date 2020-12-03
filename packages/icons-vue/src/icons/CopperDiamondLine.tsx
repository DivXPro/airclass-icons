// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopperDiamondLineSvg from '@airclass/icons-svg/lib/asn/CopperDiamondLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopperDiamondLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopperDiamondLineSvg}></AntdIcon>;
};

CopperDiamondLine.displayName = 'CopperDiamondLine';
CopperDiamondLine.inheritAttrs = false;
export default CopperDiamondLine;