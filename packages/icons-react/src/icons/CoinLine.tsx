// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CoinLineSvg from '@airclass/icons-svg/lib/asn/CoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CoinLineSvg} />;

CoinLine.displayName = 'CoinLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CoinLine);