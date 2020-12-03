// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryLowFillSvg from '@airclass/icons-svg/lib/asn/BatteryLowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryLowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryLowFillSvg}></AntdIcon>;
};

BatteryLowFill.displayName = 'BatteryLowFill';
BatteryLowFill.inheritAttrs = false;
export default BatteryLowFill;