// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZoomInLineSvg from '@airclass/icons-svg/lib/asn/ZoomInLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomInLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomInLineSvg} />;

ZoomInLine.displayName = 'ZoomInLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomInLine);