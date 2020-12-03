// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParkingBoxLineSvg from '@airclass/icons-svg/lib/asn/ParkingBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParkingBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParkingBoxLineSvg}></AntdIcon>;
};

ParkingBoxLine.displayName = 'ParkingBoxLine';
ParkingBoxLine.inheritAttrs = false;
export default ParkingBoxLine;