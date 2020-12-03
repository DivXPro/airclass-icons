// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NumbersLineSvg from '@airclass/icons-svg/lib/asn/NumbersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumbersLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NumbersLineSvg} />;

NumbersLine.displayName = 'NumbersLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NumbersLine);