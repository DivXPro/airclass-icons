// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WirelessChargingLineSvg from '@airclass/icons-svg/lib/asn/WirelessChargingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WirelessChargingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WirelessChargingLineSvg}></AntdIcon>;
};

WirelessChargingLine.displayName = 'WirelessChargingLine';
WirelessChargingLine.inheritAttrs = false;
export default WirelessChargingLine;