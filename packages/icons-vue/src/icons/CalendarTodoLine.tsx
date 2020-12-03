// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarTodoLineSvg from '@airclass/icons-svg/lib/asn/CalendarTodoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarTodoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTodoLineSvg}></AntdIcon>;
};

CalendarTodoLine.displayName = 'CalendarTodoLine';
CalendarTodoLine.inheritAttrs = false;
export default CalendarTodoLine;