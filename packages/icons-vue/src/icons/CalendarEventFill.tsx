// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarEventFillSvg from '@airclass/icons-svg/lib/asn/CalendarEventFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarEventFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEventFillSvg}></AntdIcon>;
};

CalendarEventFill.displayName = 'CalendarEventFill';
CalendarEventFill.inheritAttrs = false;
export default CalendarEventFill;