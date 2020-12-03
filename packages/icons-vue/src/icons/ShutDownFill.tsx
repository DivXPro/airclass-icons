// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShutDownFillSvg from '@airclass/icons-svg/lib/asn/ShutDownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShutDownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShutDownFillSvg}></AntdIcon>;
};

ShutDownFill.displayName = 'ShutDownFill';
ShutDownFill.inheritAttrs = false;
export default ShutDownFill;