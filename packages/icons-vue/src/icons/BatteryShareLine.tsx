// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatteryShareLineSvg from '@airclass/icons-svg/lib/asn/BatteryShareLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryShareLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryShareLineSvg}></AntdIcon>;
};

BatteryShareLine.displayName = 'BatteryShareLine';
BatteryShareLine.inheritAttrs = false;
export default BatteryShareLine;