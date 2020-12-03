// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorLockFillSvg from '@airclass/icons-svg/lib/asn/DoorLockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorLockFillSvg}></AntdIcon>;
};

DoorLockFill.displayName = 'DoorLockFill';
DoorLockFill.inheritAttrs = false;
export default DoorLockFill;