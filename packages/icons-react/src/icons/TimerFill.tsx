// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TimerFillSvg from '@airclass/icons-svg/lib/asn/TimerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimerFillSvg} />;

TimerFill.displayName = 'TimerFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimerFill);