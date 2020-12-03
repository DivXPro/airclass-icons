// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QrScanLineSvg from '@airclass/icons-svg/lib/asn/QrScanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrScanLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QrScanLineSvg} />;

QrScanLine.displayName = 'QrScanLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QrScanLine);