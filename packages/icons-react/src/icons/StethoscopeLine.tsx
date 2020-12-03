// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StethoscopeLineSvg from '@airclass/icons-svg/lib/asn/StethoscopeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StethoscopeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StethoscopeLineSvg} />;

StethoscopeLine.displayName = 'StethoscopeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StethoscopeLine);