// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlightTakeoffLineSvg from '@airclass/icons-svg/lib/asn/FlightTakeoffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlightTakeoffLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlightTakeoffLineSvg} />;

FlightTakeoffLine.displayName = 'FlightTakeoffLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlightTakeoffLine);