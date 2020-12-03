// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnsplashLineSvg from '@airclass/icons-svg/lib/asn/UnsplashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnsplashLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnsplashLineSvg} />;

UnsplashLine.displayName = 'UnsplashLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnsplashLine);