// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TruckLineSvg from '@airclass/icons-svg/lib/asn/TruckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TruckLineSvg} />;

TruckLine.displayName = 'TruckLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TruckLine);