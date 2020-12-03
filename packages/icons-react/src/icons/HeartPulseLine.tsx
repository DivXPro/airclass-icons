// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartPulseLineSvg from '@airclass/icons-svg/lib/asn/HeartPulseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartPulseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartPulseLineSvg} />;

HeartPulseLine.displayName = 'HeartPulseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartPulseLine);