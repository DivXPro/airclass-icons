// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarEventLineSvg from '@airclass/icons-svg/lib/asn/CalendarEventLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarEventLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarEventLineSvg} />;

CalendarEventLine.displayName = 'CalendarEventLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarEventLine);