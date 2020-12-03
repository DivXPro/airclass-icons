// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PulseLineSvg from '@airclass/icons-svg/lib/asn/PulseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PulseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PulseLineSvg} />;

PulseLine.displayName = 'PulseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PulseLine);