// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeviceRecoverLineSvg from '@airclass/icons-svg/lib/asn/DeviceRecoverLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeviceRecoverLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceRecoverLineSvg}></AntdIcon>;
};

DeviceRecoverLine.displayName = 'DeviceRecoverLine';
DeviceRecoverLine.inheritAttrs = false;
export default DeviceRecoverLine;