// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryShareFillSvg from '@airclass/icons-svg/lib/asn/BatteryShareFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryShareFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryShareFillSvg}></AntdIcon>;
};

BatteryShareFill.displayName = 'BatteryShareFill';
BatteryShareFill.inheritAttrs = false;
export default BatteryShareFill;