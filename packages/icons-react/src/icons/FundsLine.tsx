// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundsLineSvg from '@airclass/icons-svg/lib/asn/FundsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundsLineSvg} />;

FundsLine.displayName = 'FundsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FundsLine);