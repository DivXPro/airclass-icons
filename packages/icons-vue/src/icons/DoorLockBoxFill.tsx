// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorLockBoxFillSvg from '@airclass/icons-svg/lib/asn/DoorLockBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLockBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorLockBoxFillSvg}></AntdIcon>;
};

DoorLockBoxFill.displayName = 'DoorLockBoxFill';
DoorLockBoxFill.inheritAttrs = false;
export default DoorLockBoxFill;