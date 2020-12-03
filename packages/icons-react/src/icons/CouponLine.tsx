// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CouponLineSvg from '@airclass/icons-svg/lib/asn/CouponLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CouponLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CouponLineSvg} />;

CouponLine.displayName = 'CouponLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CouponLine);