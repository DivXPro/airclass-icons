// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryChargeLineSvg from '@airclass/icons-svg/lib/asn/BatteryChargeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryChargeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargeLineSvg}></AntdIcon>;
};

BatteryChargeLine.displayName = 'BatteryChargeLine';
BatteryChargeLine.inheritAttrs = false;
export default BatteryChargeLine;