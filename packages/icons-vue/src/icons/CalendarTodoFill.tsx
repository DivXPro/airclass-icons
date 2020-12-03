// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarTodoFillSvg from '@airclass/icons-svg/lib/asn/CalendarTodoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarTodoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTodoFillSvg}></AntdIcon>;
};

CalendarTodoFill.displayName = 'CalendarTodoFill';
CalendarTodoFill.inheritAttrs = false;
export default CalendarTodoFill;