// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsbLineSvg from '@airclass/icons-svg/lib/asn/UsbLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsbLineSvg} />;

UsbLine.displayName = 'UsbLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbLine);