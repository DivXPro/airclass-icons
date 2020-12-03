// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatQuoteLineSvg from '@airclass/icons-svg/lib/asn/ChatQuoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatQuoteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatQuoteLineSvg} />;

ChatQuoteLine.displayName = 'ChatQuoteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatQuoteLine);