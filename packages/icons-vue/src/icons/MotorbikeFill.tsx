// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MotorbikeFillSvg from '@airclass/icons-svg/lib/asn/MotorbikeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MotorbikeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MotorbikeFillSvg}></AntdIcon>;
};

MotorbikeFill.displayName = 'MotorbikeFill';
MotorbikeFill.inheritAttrs = false;
export default MotorbikeFill;