// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubwayWifiLineSvg from '@airclass/icons-svg/lib/asn/SubwayWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubwayWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubwayWifiLineSvg}></AntdIcon>;
};

SubwayWifiLine.displayName = 'SubwayWifiLine';
SubwayWifiLine.inheritAttrs = false;
export default SubwayWifiLine;