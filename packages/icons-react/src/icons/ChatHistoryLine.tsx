// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatHistoryLineSvg from '@airclass/icons-svg/lib/asn/ChatHistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHistoryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatHistoryLineSvg} />;

ChatHistoryLine.displayName = 'ChatHistoryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatHistoryLine);