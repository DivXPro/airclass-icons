// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FahrenheitLineSvg from '@airclass/icons-svg/lib/asn/FahrenheitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FahrenheitLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FahrenheitLineSvg} />;

FahrenheitLine.displayName = 'FahrenheitLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FahrenheitLine);