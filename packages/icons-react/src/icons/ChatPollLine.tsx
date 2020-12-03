// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatPollLineSvg from '@airclass/icons-svg/lib/asn/ChatPollLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPollLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatPollLineSvg} />;

ChatPollLine.displayName = 'ChatPollLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatPollLine);