// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MouseFillSvg from '@airclass/icons-svg/lib/asn/MouseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MouseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseFillSvg}></AntdIcon>;
};

MouseFill.displayName = 'MouseFill';
MouseFill.inheritAttrs = false;
export default MouseFill;