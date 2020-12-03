// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalWifiFillSvg from '@airclass/icons-svg/lib/asn/SignalWifiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalWifiFillSvg}></AntdIcon>;
};

SignalWifiFill.displayName = 'SignalWifiFill';
SignalWifiFill.inheritAttrs = false;
export default SignalWifiFill;