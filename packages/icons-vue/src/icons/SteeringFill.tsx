// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SteeringFillSvg from '@airclass/icons-svg/lib/asn/SteeringFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteeringFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SteeringFillSvg}></AntdIcon>;
};

SteeringFill.displayName = 'SteeringFill';
SteeringFill.inheritAttrs = false;
export default SteeringFill;