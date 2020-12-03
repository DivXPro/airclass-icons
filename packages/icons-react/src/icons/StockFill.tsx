// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StockFillSvg from '@airclass/icons-svg/lib/asn/StockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StockFillSvg} />;

StockFill.displayName = 'StockFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StockFill);