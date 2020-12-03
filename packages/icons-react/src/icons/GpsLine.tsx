// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GpsLineSvg from '@airclass/icons-svg/lib/asn/GpsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GpsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GpsLineSvg} />;

GpsLine.displayName = 'GpsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GpsLine);