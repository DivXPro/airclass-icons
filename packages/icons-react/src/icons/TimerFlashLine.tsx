// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TimerFlashLineSvg from '@airclass/icons-svg/lib/asn/TimerFlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFlashLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimerFlashLineSvg} />;

TimerFlashLine.displayName = 'TimerFlashLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimerFlashLine);