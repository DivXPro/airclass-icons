// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarLineSvg from '@airclass/icons-svg/lib/asn/CalendarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarLineSvg}></AntdIcon>;
};

CalendarLine.displayName = 'CalendarLine';
CalendarLine.inheritAttrs = false;
export default CalendarLine;