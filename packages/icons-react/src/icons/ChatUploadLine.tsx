// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatUploadLineSvg from '@airclass/icons-svg/lib/asn/ChatUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatUploadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatUploadLineSvg} />;

ChatUploadLine.displayName = 'ChatUploadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatUploadLine);