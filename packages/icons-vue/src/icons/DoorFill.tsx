// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorFillSvg from '@airclass/icons-svg/lib/asn/DoorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorFillSvg}></AntdIcon>;
};

DoorFill.displayName = 'DoorFill';
DoorFill.inheritAttrs = false;
export default DoorFill;