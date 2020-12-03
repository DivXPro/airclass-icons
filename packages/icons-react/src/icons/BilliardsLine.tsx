// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BilliardsLineSvg from '@airclass/icons-svg/lib/asn/BilliardsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilliardsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BilliardsLineSvg} />;

BilliardsLine.displayName = 'BilliardsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BilliardsLine);