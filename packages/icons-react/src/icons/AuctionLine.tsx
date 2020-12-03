// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AuctionLineSvg from '@airclass/icons-svg/lib/asn/AuctionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuctionLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuctionLineSvg} />;

AuctionLine.displayName = 'AuctionLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AuctionLine);