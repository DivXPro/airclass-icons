// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimerLineSvg from '@airclass/icons-svg/lib/asn/TimerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerLineSvg}></AntdIcon>;
};

TimerLine.displayName = 'TimerLine';
TimerLine.inheritAttrs = false;
export default TimerLine;