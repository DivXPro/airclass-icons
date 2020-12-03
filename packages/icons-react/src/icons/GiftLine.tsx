// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GiftLineSvg from '@airclass/icons-svg/lib/asn/GiftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftLineSvg} />;

GiftLine.displayName = 'GiftLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftLine);