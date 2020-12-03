// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SignalWifiLineSvg from '@airclass/icons-svg/lib/asn/SignalWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalWifiLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SignalWifiLineSvg} />;

SignalWifiLine.displayName = 'SignalWifiLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SignalWifiLine);