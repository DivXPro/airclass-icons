// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WindowFillSvg from '@airclass/icons-svg/lib/asn/WindowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowFillSvg}></AntdIcon>;
};

WindowFill.displayName = 'WindowFill';
WindowFill.inheritAttrs = false;
export default WindowFill;