// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParkingLineSvg from '@airclass/icons-svg/lib/asn/ParkingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParkingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParkingLineSvg}></AntdIcon>;
};

ParkingLine.displayName = 'ParkingLine';
ParkingLine.inheritAttrs = false;
export default ParkingLine;