// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExchangeLineSvg from '@airclass/icons-svg/lib/asn/ExchangeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExchangeLineSvg} />;

ExchangeLine.displayName = 'ExchangeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExchangeLine);