// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatVoiceLineSvg from '@airclass/icons-svg/lib/asn/ChatVoiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatVoiceLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatVoiceLineSvg} />;

ChatVoiceLine.displayName = 'ChatVoiceLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatVoiceLine);