// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlightLandLineSvg from '@airclass/icons-svg/lib/asn/FlightLandLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightLandLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlightLandLineSvg} />;

FlightLandLine.displayName = 'FlightLandLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlightLandLine);