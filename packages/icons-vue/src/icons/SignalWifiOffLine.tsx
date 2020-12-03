// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifiOffLineSvg from '@airclass/icons-svg/lib/asn/SignalWifiOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifiOffLineSvg}></AntdIcon>;
};

SignalWifiOffLine.displayName = 'SignalWifiOffLine';
SignalWifiOffLine.inheritAttrs = false;
export default SignalWifiOffLine;