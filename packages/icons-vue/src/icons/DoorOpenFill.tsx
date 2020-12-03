// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorOpenFillSvg from '@airclass/icons-svg/lib/asn/DoorOpenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorOpenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorOpenFillSvg}></AntdIcon>;
};

DoorOpenFill.displayName = 'DoorOpenFill';
DoorOpenFill.inheritAttrs = false;
export default DoorOpenFill;