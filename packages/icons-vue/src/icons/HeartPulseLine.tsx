// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartPulseLineSvg from '@airclass/icons-svg/lib/asn/HeartPulseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartPulseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartPulseLineSvg}></AntdIcon>;
};

HeartPulseLine.displayName = 'HeartPulseLine';
HeartPulseLine.inheritAttrs = false;
export default HeartPulseLine;