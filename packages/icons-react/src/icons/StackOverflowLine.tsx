// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StackOverflowLineSvg from '@airclass/icons-svg/lib/asn/StackOverflowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackOverflowLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StackOverflowLineSvg} />;

StackOverflowLine.displayName = 'StackOverflowLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StackOverflowLine);