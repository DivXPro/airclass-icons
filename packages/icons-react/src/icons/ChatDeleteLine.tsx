// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatDeleteLineSvg from '@airclass/icons-svg/lib/asn/ChatDeleteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatDeleteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatDeleteLineSvg} />;

ChatDeleteLine.displayName = 'ChatDeleteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatDeleteLine);