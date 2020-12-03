// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifi2LineSvg from '@airclass/icons-svg/lib/asn/SignalWifi2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifi2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifi2LineSvg}></AntdIcon>;
};

SignalWifi2Line.displayName = 'SignalWifi2Line';
SignalWifi2Line.inheritAttrs = false;
export default SignalWifi2Line;