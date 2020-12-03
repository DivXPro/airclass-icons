// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LiveLineSvg from '@airclass/icons-svg/lib/asn/LiveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LiveLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LiveLineSvg} />;

LiveLine.displayName = 'LiveLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LiveLine);