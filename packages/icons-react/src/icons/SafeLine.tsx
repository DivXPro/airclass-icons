// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafeLineSvg from '@airclass/icons-svg/lib/asn/SafeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafeLineSvg} />;

SafeLine.displayName = 'SafeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafeLine);