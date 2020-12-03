// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RouteLineSvg from '@airclass/icons-svg/lib/asn/RouteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RouteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RouteLineSvg} />;

RouteLine.displayName = 'RouteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RouteLine);