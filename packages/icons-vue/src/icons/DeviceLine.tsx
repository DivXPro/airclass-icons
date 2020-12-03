// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeviceLineSvg from '@airclass/icons-svg/lib/asn/DeviceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeviceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceLineSvg}></AntdIcon>;
};

DeviceLine.displayName = 'DeviceLine';
DeviceLine.inheritAttrs = false;
export default DeviceLine;