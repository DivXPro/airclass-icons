// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SyringeLineSvg from '@airclass/icons-svg/lib/asn/SyringeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SyringeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SyringeLineSvg}></AntdIcon>;
};

SyringeLine.displayName = 'SyringeLine';
SyringeLine.inheritAttrs = false;
export default SyringeLine;