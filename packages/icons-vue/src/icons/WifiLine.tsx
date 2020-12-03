// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WifiLineSvg from '@airclass/icons-svg/lib/asn/WifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiLineSvg}></AntdIcon>;
};

WifiLine.displayName = 'WifiLine';
WifiLine.inheritAttrs = false;
export default WifiLine;