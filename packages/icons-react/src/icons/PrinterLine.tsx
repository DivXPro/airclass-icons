// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterLineSvg from '@airclass/icons-svg/lib/asn/PrinterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterLineSvg} />;

PrinterLine.displayName = 'PrinterLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterLine);