// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlightLandFillSvg from '@airclass/icons-svg/lib/asn/FlightLandFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightLandFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightLandFillSvg}></AntdIcon>;
};

FlightLandFill.displayName = 'FlightLandFill';
FlightLandFill.inheritAttrs = false;
export default FlightLandFill;