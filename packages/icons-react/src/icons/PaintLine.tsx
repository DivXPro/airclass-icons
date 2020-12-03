// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PaintLineSvg from '@airclass/icons-svg/lib/asn/PaintLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaintLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PaintLineSvg} />;

PaintLine.displayName = 'PaintLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PaintLine);