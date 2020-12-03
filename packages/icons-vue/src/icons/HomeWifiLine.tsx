// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeWifiLineSvg from '@airclass/icons-svg/lib/asn/HomeWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiLineSvg}></AntdIcon>;
};

HomeWifiLine.displayName = 'HomeWifiLine';
HomeWifiLine.inheritAttrs = false;
export default HomeWifiLine;