// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PingPongLineSvg from '@airclass/icons-svg/lib/asn/PingPongLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PingPongLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PingPongLineSvg} />;

PingPongLine.displayName = 'PingPongLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PingPongLine);