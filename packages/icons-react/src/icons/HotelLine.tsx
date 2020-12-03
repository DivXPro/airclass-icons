// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HotelLineSvg from '@airclass/icons-svg/lib/asn/HotelLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotelLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HotelLineSvg} />;

HotelLine.displayName = 'HotelLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HotelLine);