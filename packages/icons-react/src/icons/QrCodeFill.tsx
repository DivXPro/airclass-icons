// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QrCodeFillSvg from '@airclass/icons-svg/lib/asn/QrCodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrCodeFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QrCodeFillSvg} />;

QrCodeFill.displayName = 'QrCodeFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QrCodeFill);