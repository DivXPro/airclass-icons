// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MicroscopeLineSvg from '@airclass/icons-svg/lib/asn/MicroscopeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicroscopeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MicroscopeLineSvg} />;

MicroscopeLine.displayName = 'MicroscopeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MicroscopeLine);