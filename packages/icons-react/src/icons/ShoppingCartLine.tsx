// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingCartLineSvg from '@airclass/icons-svg/lib/asn/ShoppingCartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingCartLineSvg} />;

ShoppingCartLine.displayName = 'ShoppingCartLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingCartLine);