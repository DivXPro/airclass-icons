// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryChargeFillSvg from '@airclass/icons-svg/lib/asn/BatteryChargeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryChargeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargeFillSvg}></AntdIcon>;
};

BatteryChargeFill.displayName = 'BatteryChargeFill';
BatteryChargeFill.inheritAttrs = false;
export default BatteryChargeFill;