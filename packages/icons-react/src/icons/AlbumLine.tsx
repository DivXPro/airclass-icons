// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlbumLineSvg from '@airclass/icons-svg/lib/asn/AlbumLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlbumLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlbumLineSvg} />;

AlbumLine.displayName = 'AlbumLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlbumLine);