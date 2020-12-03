// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaxiWifiLineSvg from '@airclass/icons-svg/lib/asn/TaxiWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaxiWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaxiWifiLineSvg}></AntdIcon>;
};

TaxiWifiLine.displayName = 'TaxiWifiLine';
TaxiWifiLine.inheritAttrs = false;
export default TaxiWifiLine;