// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChargingPileFillSvg from '@airclass/icons-svg/lib/asn/ChargingPileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChargingPileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChargingPileFillSvg}></AntdIcon>;
};

ChargingPileFill.displayName = 'ChargingPileFill';
ChargingPileFill.inheritAttrs = false;
export default ChargingPileFill;