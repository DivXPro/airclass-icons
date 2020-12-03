// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WifiLineSvg from '@airclass/icons-svg/lib/asn/WifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WifiLineSvg} />;

WifiLine.displayName = 'WifiLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WifiLine);