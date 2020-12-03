// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryLowLineSvg from '@airclass/icons-svg/lib/asn/BatteryLowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryLowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryLowLineSvg}></AntdIcon>;
};

BatteryLowLine.displayName = 'BatteryLowLine';
BatteryLowLine.inheritAttrs = false;
export default BatteryLowLine;