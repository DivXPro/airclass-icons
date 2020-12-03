// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MusicLineSvg from '@airclass/icons-svg/lib/asn/MusicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MusicLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MusicLineSvg} />;

MusicLine.displayName = 'MusicLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MusicLine);