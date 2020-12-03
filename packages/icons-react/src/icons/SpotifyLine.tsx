// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpotifyLineSvg from '@airclass/icons-svg/lib/asn/SpotifyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpotifyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpotifyLineSvg} />;

SpotifyLine.displayName = 'SpotifyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpotifyLine);