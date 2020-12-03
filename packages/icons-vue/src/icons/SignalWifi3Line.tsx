// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifi3LineSvg from '@airclass/icons-svg/lib/asn/SignalWifi3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifi3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifi3LineSvg}></AntdIcon>;
};

SignalWifi3Line.displayName = 'SignalWifi3Line';
SignalWifi3Line.inheritAttrs = false;
export default SignalWifi3Line;