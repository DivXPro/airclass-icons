// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimerFlashLineSvg from '@airclass/icons-svg/lib/asn/TimerFlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFlashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerFlashLineSvg}></AntdIcon>;
};

TimerFlashLine.displayName = 'TimerFlashLine';
TimerFlashLine.inheritAttrs = false;
export default TimerFlashLine;