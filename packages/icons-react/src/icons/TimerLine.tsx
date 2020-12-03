// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TimerLineSvg from '@airclass/icons-svg/lib/asn/TimerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimerLineSvg} />;

TimerLine.displayName = 'TimerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimerLine);