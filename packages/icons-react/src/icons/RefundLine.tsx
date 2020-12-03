// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RefundLineSvg from '@airclass/icons-svg/lib/asn/RefundLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefundLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RefundLineSvg} />;

RefundLine.displayName = 'RefundLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RefundLine);