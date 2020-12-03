// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PriceTagLineSvg from '@airclass/icons-svg/lib/asn/PriceTagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PriceTagLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PriceTagLineSvg} />;

PriceTagLine.displayName = 'PriceTagLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PriceTagLine);