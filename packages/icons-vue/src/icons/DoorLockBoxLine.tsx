// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorLockBoxLineSvg from '@airclass/icons-svg/lib/asn/DoorLockBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLockBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorLockBoxLineSvg}></AntdIcon>;
};

DoorLockBoxLine.displayName = 'DoorLockBoxLine';
DoorLockBoxLine.inheritAttrs = false;
export default DoorLockBoxLine;