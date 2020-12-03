// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatSmileLineSvg from '@airclass/icons-svg/lib/asn/ChatSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSmileLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatSmileLineSvg} />;

ChatSmileLine.displayName = 'ChatSmileLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatSmileLine);