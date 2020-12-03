// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WifiOffLineSvg from '@airclass/icons-svg/lib/asn/WifiOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiOffLineSvg}></AntdIcon>;
};

WifiOffLine.displayName = 'WifiOffLine';
WifiOffLine.inheritAttrs = false;
export default WifiOffLine;