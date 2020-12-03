// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifiErrorLineSvg from '@airclass/icons-svg/lib/asn/SignalWifiErrorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiErrorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifiErrorLineSvg}></AntdIcon>;
};

SignalWifiErrorLine.displayName = 'SignalWifiErrorLine';
SignalWifiErrorLine.inheritAttrs = false;
export default SignalWifiErrorLine;