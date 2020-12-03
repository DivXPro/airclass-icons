// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorClosedFillSvg from '@airclass/icons-svg/lib/asn/DoorClosedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorClosedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorClosedFillSvg}></AntdIcon>;
};

DoorClosedFill.displayName = 'DoorClosedFill';
DoorClosedFill.inheritAttrs = false;
export default DoorClosedFill;