// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorLockLineSvg from '@airclass/icons-svg/lib/asn/DoorLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorLockLineSvg}></AntdIcon>;
};

DoorLockLine.displayName = 'DoorLockLine';
DoorLockLine.inheritAttrs = false;
export default DoorLockLine;