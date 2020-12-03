// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarcodeFillSvg from '@airclass/icons-svg/lib/asn/BarcodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarcodeFillSvg} />;

BarcodeFill.displayName = 'BarcodeFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BarcodeFill);