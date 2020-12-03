// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlightLandLineSvg from '@airclass/icons-svg/lib/asn/FlightLandLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightLandLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightLandLineSvg}></AntdIcon>;
};

FlightLandLine.displayName = 'FlightLandLine';
FlightLandLine.inheritAttrs = false;
export default FlightLandLine;