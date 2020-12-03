// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BitCoinLineSvg from '@airclass/icons-svg/lib/asn/BitCoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BitCoinLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BitCoinLineSvg} />;

BitCoinLine.displayName = 'BitCoinLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BitCoinLine);