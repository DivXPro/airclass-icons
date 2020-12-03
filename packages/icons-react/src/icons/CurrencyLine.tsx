// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CurrencyLineSvg from '@airclass/icons-svg/lib/asn/CurrencyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CurrencyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CurrencyLineSvg} />;

CurrencyLine.displayName = 'CurrencyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CurrencyLine);