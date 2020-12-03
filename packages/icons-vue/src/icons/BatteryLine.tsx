// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryLineSvg from '@airclass/icons-svg/lib/asn/BatteryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryLineSvg}></AntdIcon>;
};

BatteryLine.displayName = 'BatteryLine';
BatteryLine.inheritAttrs = false;
export default BatteryLine;