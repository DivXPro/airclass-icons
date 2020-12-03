// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WindowsFillSvg from '@airclass/icons-svg/lib/asn/WindowsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowsFillSvg}></AntdIcon>;
};

WindowsFill.displayName = 'WindowsFill';
WindowsFill.inheritAttrs = false;
export default WindowsFill;