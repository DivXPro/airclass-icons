// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedPacketLineSvg from '@airclass/icons-svg/lib/asn/RedPacketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedPacketLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedPacketLineSvg} />;

RedPacketLine.displayName = 'RedPacketLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedPacketLine);