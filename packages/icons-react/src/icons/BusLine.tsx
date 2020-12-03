// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BusLineSvg from '@airclass/icons-svg/lib/asn/BusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BusLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BusLineSvg} />;

BusLine.displayName = 'BusLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BusLine);