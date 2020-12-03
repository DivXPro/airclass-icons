// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QrCodeLineSvg from '@airclass/icons-svg/lib/asn/QrCodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrCodeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QrCodeLineSvg} />;

QrCodeLine.displayName = 'QrCodeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QrCodeLine);