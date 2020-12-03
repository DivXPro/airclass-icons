// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryFillSvg from '@airclass/icons-svg/lib/asn/BatteryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFillSvg}></AntdIcon>;
};

BatteryFill.displayName = 'BatteryFill';
BatteryFill.inheritAttrs = false;
export default BatteryFill;