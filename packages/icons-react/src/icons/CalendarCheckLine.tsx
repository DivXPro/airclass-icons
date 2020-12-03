// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarCheckLineSvg from '@airclass/icons-svg/lib/asn/CalendarCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarCheckLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarCheckLineSvg} />;

CalendarCheckLine.displayName = 'CalendarCheckLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarCheckLine);