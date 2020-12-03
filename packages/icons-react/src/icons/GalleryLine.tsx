// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GalleryLineSvg from '@airclass/icons-svg/lib/asn/GalleryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GalleryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GalleryLineSvg} />;

GalleryLine.displayName = 'GalleryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GalleryLine);