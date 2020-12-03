// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalTowerLineSvg from '@airclass/icons-svg/lib/asn/SignalTowerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalTowerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalTowerLineSvg}></AntdIcon>;
};

SignalTowerLine.displayName = 'SignalTowerLine';
SignalTowerLine.inheritAttrs = false;
export default SignalTowerLine;