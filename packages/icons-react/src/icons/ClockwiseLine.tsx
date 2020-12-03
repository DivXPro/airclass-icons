// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClockwiseLineSvg from '@airclass/icons-svg/lib/asn/ClockwiseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockwiseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockwiseLineSvg} />;

ClockwiseLine.displayName = 'ClockwiseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockwiseLine);