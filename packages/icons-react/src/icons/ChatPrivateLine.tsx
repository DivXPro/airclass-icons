// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatPrivateLineSvg from '@airclass/icons-svg/lib/asn/ChatPrivateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPrivateLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatPrivateLineSvg} />;

ChatPrivateLine.displayName = 'ChatPrivateLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatPrivateLine);