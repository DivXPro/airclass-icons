// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifiErrorFillSvg from '@airclass/icons-svg/lib/asn/SignalWifiErrorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiErrorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifiErrorFillSvg}></AntdIcon>;
};

SignalWifiErrorFill.displayName = 'SignalWifiErrorFill';
SignalWifiErrorFill.inheritAttrs = false;
export default SignalWifiErrorFill;