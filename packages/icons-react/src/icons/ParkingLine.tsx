// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ParkingLineSvg from '@airclass/icons-svg/lib/asn/ParkingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParkingLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ParkingLineSvg} />;

ParkingLine.displayName = 'ParkingLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ParkingLine);