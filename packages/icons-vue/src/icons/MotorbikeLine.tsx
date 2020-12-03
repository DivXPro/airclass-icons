// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MotorbikeLineSvg from '@airclass/icons-svg/lib/asn/MotorbikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MotorbikeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MotorbikeLineSvg}></AntdIcon>;
};

MotorbikeLine.displayName = 'MotorbikeLine';
MotorbikeLine.inheritAttrs = false;
export default MotorbikeLine;