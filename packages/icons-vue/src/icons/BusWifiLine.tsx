// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BusWifiLineSvg from '@airclass/icons-svg/lib/asn/BusWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BusWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusWifiLineSvg}></AntdIcon>;
};

BusWifiLine.displayName = 'BusWifiLine';
BusWifiLine.inheritAttrs = false;
export default BusWifiLine;