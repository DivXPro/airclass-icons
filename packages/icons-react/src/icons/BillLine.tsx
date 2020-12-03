// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BillLineSvg from '@airclass/icons-svg/lib/asn/BillLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillLineSvg} />;

BillLine.displayName = 'BillLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillLine);