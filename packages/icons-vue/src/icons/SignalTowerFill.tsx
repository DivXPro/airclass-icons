// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalTowerFillSvg from '@airclass/icons-svg/lib/asn/SignalTowerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalTowerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalTowerFillSvg}></AntdIcon>;
};

SignalTowerFill.displayName = 'SignalTowerFill';
SignalTowerFill.inheritAttrs = false;
export default SignalTowerFill;