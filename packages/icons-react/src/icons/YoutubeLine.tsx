// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YoutubeLineSvg from '@airclass/icons-svg/lib/asn/YoutubeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YoutubeLineSvg} />;

YoutubeLine.displayName = 'YoutubeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YoutubeLine);