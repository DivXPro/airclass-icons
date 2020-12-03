// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoChatLineSvg from '@airclass/icons-svg/lib/asn/VideoChatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoChatLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoChatLineSvg} />;

VideoChatLine.displayName = 'VideoChatLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoChatLine);