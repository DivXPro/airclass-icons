// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AirplayLineSvg from '@airclass/icons-svg/lib/asn/AirplayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirplayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AirplayLineSvg} />;

AirplayLine.displayName = 'AirplayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AirplayLine);