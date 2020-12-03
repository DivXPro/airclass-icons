// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpeedLineSvg from '@airclass/icons-svg/lib/asn/SpeedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeedLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpeedLineSvg} />;

SpeedLine.displayName = 'SpeedLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpeedLine);