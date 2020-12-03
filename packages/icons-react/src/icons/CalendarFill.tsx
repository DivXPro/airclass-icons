// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarFillSvg from '@airclass/icons-svg/lib/asn/CalendarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarFillSvg} />;

CalendarFill.displayName = 'CalendarFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarFill);