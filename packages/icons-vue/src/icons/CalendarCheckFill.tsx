// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarCheckFillSvg from '@airclass/icons-svg/lib/asn/CalendarCheckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarCheckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCheckFillSvg}></AntdIcon>;
};

CalendarCheckFill.displayName = 'CalendarCheckFill';
CalendarCheckFill.inheritAttrs = false;
export default CalendarCheckFill;