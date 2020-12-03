// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopCircleLineSvg from '@airclass/icons-svg/lib/asn/StopCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleLineSvg}></AntdIcon>;
};

StopCircleLine.displayName = 'StopCircleLine';
StopCircleLine.inheritAttrs = false;
export default StopCircleLine;