// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarcodeLineSvg from '@airclass/icons-svg/lib/asn/BarcodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarcodeLineSvg} />;

BarcodeLine.displayName = 'BarcodeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BarcodeLine);