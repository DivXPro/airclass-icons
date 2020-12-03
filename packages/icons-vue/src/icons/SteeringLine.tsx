// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SteeringLineSvg from '@airclass/icons-svg/lib/asn/SteeringLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteeringLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SteeringLineSvg}></AntdIcon>;
};

SteeringLine.displayName = 'SteeringLine';
SteeringLine.inheritAttrs = false;
export default SteeringLine;