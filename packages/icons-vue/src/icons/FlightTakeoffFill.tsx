// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlightTakeoffFillSvg from '@airclass/icons-svg/lib/asn/FlightTakeoffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightTakeoffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightTakeoffFillSvg}></AntdIcon>;
};

FlightTakeoffFill.displayName = 'FlightTakeoffFill';
FlightTakeoffFill.inheritAttrs = false;
export default FlightTakeoffFill;