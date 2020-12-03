// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifiLineSvg from '@airclass/icons-svg/lib/asn/SignalWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifiLineSvg}></AntdIcon>;
};

SignalWifiLine.displayName = 'SignalWifiLine';
SignalWifiLine.inheritAttrs = false;
export default SignalWifiLine;