// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleLineSvg from '@airclass/icons-svg/lib/asn/AppleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppleLineSvg} />;

AppleLine.displayName = 'AppleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppleLine);