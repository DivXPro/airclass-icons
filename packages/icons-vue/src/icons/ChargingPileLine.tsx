// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChargingPileLineSvg from '@airclass/icons-svg/lib/asn/ChargingPileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChargingPileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChargingPileLineSvg}></AntdIcon>;
};

ChargingPileLine.displayName = 'ChargingPileLine';
ChargingPileLine.inheritAttrs = false;
export default ChargingPileLine;