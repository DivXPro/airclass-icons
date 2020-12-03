// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopperCoinFillSvg from '@airclass/icons-svg/lib/asn/CopperCoinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopperCoinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopperCoinFillSvg}></AntdIcon>;
};

CopperCoinFill.displayName = 'CopperCoinFill';
CopperCoinFill.inheritAttrs = false;
export default CopperCoinFill;