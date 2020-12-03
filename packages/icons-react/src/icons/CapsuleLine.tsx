// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CapsuleLineSvg from '@airclass/icons-svg/lib/asn/CapsuleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CapsuleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CapsuleLineSvg} />;

CapsuleLine.displayName = 'CapsuleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CapsuleLine);