// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StockLineSvg from '@airclass/icons-svg/lib/asn/StockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StockLineSvg} />;

StockLine.displayName = 'StockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StockLine);