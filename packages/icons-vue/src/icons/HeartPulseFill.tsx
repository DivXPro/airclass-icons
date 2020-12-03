// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartPulseFillSvg from '@airclass/icons-svg/lib/asn/HeartPulseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartPulseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartPulseFillSvg}></AntdIcon>;
};

HeartPulseFill.displayName = 'HeartPulseFill';
HeartPulseFill.inheritAttrs = false;
export default HeartPulseFill;