// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ImageLineSvg from '@airclass/icons-svg/lib/asn/ImageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ImageLineSvg} />;

ImageLine.displayName = 'ImageLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ImageLine);