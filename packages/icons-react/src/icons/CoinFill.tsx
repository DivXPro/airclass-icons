// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CoinFillSvg from '@airclass/icons-svg/lib/asn/CoinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CoinFillSvg} />;

CoinFill.displayName = 'CoinFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CoinFill);