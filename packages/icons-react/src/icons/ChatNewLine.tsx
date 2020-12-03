// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatNewLineSvg from '@airclass/icons-svg/lib/asn/ChatNewLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatNewLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatNewLineSvg} />;

ChatNewLine.displayName = 'ChatNewLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatNewLine);