// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackshareFillSvg from '@airclass/icons-svg/lib/asn/StackshareFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackshareFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackshareFillSvg}></AntdIcon>;
};

StackshareFill.displayName = 'StackshareFill';
StackshareFill.inheritAttrs = false;
export default StackshareFill;