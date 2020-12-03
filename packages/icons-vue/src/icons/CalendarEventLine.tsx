// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarEventLineSvg from '@airclass/icons-svg/lib/asn/CalendarEventLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarEventLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEventLineSvg}></AntdIcon>;
};

CalendarEventLine.displayName = 'CalendarEventLine';
CalendarEventLine.inheritAttrs = false;
export default CalendarEventLine;