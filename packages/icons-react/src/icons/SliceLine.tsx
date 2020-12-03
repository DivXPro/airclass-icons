// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SliceLineSvg from '@airclass/icons-svg/lib/asn/SliceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SliceLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SliceLineSvg} />;

SliceLine.displayName = 'SliceLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SliceLine);