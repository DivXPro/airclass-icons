// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StackLineSvg from '@airclass/icons-svg/lib/asn/StackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StackLineSvg} />;

StackLine.displayName = 'StackLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StackLine);