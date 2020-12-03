// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Timer2LineSvg from '@airclass/icons-svg/lib/asn/Timer2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Timer2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer2LineSvg}></AntdIcon>;
};

Timer2Line.displayName = 'Timer2Line';
Timer2Line.inheritAttrs = false;
export default Timer2Line;