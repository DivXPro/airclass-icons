// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeviceFillSvg from '@airclass/icons-svg/lib/asn/DeviceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeviceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceFillSvg}></AntdIcon>;
};

DeviceFill.displayName = 'DeviceFill';
DeviceFill.inheritAttrs = false;
export default DeviceFill;