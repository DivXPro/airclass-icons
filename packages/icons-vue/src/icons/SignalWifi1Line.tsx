// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifi1LineSvg from '@airclass/icons-svg/lib/asn/SignalWifi1Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifi1Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifi1LineSvg}></AntdIcon>;
};

SignalWifi1Line.displayName = 'SignalWifi1Line';
SignalWifi1Line.inheritAttrs = false;
export default SignalWifi1Line;