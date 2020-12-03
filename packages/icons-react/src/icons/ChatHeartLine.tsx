// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatHeartLineSvg from '@airclass/icons-svg/lib/asn/ChatHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHeartLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatHeartLineSvg} />;

ChatHeartLine.displayName = 'ChatHeartLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatHeartLine);