// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParkingFillSvg from '@airclass/icons-svg/lib/asn/ParkingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParkingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParkingFillSvg}></AntdIcon>;
};

ParkingFill.displayName = 'ParkingFill';
ParkingFill.inheritAttrs = false;
export default ParkingFill;