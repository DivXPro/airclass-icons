// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParkingBoxFillSvg from '@airclass/icons-svg/lib/asn/ParkingBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParkingBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParkingBoxFillSvg}></AntdIcon>;
};

ParkingBoxFill.displayName = 'ParkingBoxFill';
ParkingBoxFill.inheritAttrs = false;
export default ParkingBoxFill;