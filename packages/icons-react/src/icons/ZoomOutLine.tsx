// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZoomOutLineSvg from '@airclass/icons-svg/lib/asn/ZoomOutLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomOutLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomOutLineSvg} />;

ZoomOutLine.displayName = 'ZoomOutLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomOutLine);