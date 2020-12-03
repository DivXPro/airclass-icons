// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimerFlashFillSvg from '@airclass/icons-svg/lib/asn/TimerFlashFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFlashFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerFlashFillSvg}></AntdIcon>;
};

TimerFlashFill.displayName = 'TimerFlashFill';
TimerFlashFill.inheritAttrs = false;
export default TimerFlashFill;