// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FoggyLineSvg from '@airclass/icons-svg/lib/asn/FoggyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoggyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FoggyLineSvg} />;

FoggyLine.displayName = 'FoggyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FoggyLine);