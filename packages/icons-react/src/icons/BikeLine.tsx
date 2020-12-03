// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BikeLineSvg from '@airclass/icons-svg/lib/asn/BikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BikeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BikeLineSvg} />;

BikeLine.displayName = 'BikeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BikeLine);