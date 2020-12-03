// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OrderPlayLineSvg from '@airclass/icons-svg/lib/asn/OrderPlayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrderPlayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OrderPlayLineSvg} />;

OrderPlayLine.displayName = 'OrderPlayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OrderPlayLine);