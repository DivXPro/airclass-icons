// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShapeLineSvg from '@airclass/icons-svg/lib/asn/ShapeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShapeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShapeLineSvg} />;

ShapeLine.displayName = 'ShapeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShapeLine);