// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarcodeBoxLineSvg from '@airclass/icons-svg/lib/asn/BarcodeBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeBoxLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarcodeBoxLineSvg} />;

BarcodeBoxLine.displayName = 'BarcodeBoxLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BarcodeBoxLine);