// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlightTakeoffLineSvg from '@airclass/icons-svg/lib/asn/FlightTakeoffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightTakeoffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightTakeoffLineSvg}></AntdIcon>;
};

FlightTakeoffLine.displayName = 'FlightTakeoffLine';
FlightTakeoffLine.inheritAttrs = false;
export default FlightTakeoffLine;