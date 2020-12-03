// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScanLineSvg from '@airclass/icons-svg/lib/asn/ScanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScanLineSvg} />;

ScanLine.displayName = 'ScanLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ScanLine);