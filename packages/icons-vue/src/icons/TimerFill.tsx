// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimerFillSvg from '@airclass/icons-svg/lib/asn/TimerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerFillSvg}></AntdIcon>;
};

TimerFill.displayName = 'TimerFill';
TimerFill.inheritAttrs = false;
export default TimerFill;