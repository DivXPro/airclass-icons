// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseLineSvg from '@airclass/icons-svg/lib/asn/CloseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseLineSvg} />;

CloseLine.displayName = 'CloseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseLine);