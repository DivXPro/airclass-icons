// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarCheckLineSvg from '@airclass/icons-svg/lib/asn/CalendarCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarCheckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCheckLineSvg}></AntdIcon>;
};

CalendarCheckLine.displayName = 'CalendarCheckLine';
CalendarCheckLine.inheritAttrs = false;
export default CalendarCheckLine;