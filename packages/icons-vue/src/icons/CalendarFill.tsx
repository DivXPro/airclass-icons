// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarFillSvg from '@airclass/icons-svg/lib/asn/CalendarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarFillSvg}></AntdIcon>;
};

CalendarFill.displayName = 'CalendarFill';
CalendarFill.inheritAttrs = false;
export default CalendarFill;