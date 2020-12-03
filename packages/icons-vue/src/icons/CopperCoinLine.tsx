// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopperCoinLineSvg from '@airclass/icons-svg/lib/asn/CopperCoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopperCoinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopperCoinLineSvg}></AntdIcon>;
};

CopperCoinLine.displayName = 'CopperCoinLine';
CopperCoinLine.inheritAttrs = false;
export default CopperCoinLine;