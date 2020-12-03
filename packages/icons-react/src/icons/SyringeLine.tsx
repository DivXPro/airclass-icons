// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SyringeLineSvg from '@airclass/icons-svg/lib/asn/SyringeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SyringeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SyringeLineSvg} />;

SyringeLine.displayName = 'SyringeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SyringeLine);