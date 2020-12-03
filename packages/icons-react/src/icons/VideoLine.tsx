// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoLineSvg from '@airclass/icons-svg/lib/asn/VideoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoLineSvg} />;

VideoLine.displayName = 'VideoLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoLine);