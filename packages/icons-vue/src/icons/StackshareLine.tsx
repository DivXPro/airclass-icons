// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackshareLineSvg from '@airclass/icons-svg/lib/asn/StackshareLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackshareLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackshareLineSvg}></AntdIcon>;
};

StackshareLine.displayName = 'StackshareLine';
StackshareLine.inheritAttrs = false;
export default StackshareLine;