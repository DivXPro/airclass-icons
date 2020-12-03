// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackOverflowFillSvg from '@airclass/icons-svg/lib/asn/StackOverflowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackOverflowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackOverflowFillSvg}></AntdIcon>;
};

StackOverflowFill.displayName = 'StackOverflowFill';
StackOverflowFill.inheritAttrs = false;
export default StackOverflowFill;