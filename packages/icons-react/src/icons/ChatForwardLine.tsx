// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatForwardLineSvg from '@airclass/icons-svg/lib/asn/ChatForwardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatForwardLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatForwardLineSvg} />;

ChatForwardLine.displayName = 'ChatForwardLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatForwardLine);