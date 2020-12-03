// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SensorLineSvg from '@airclass/icons-svg/lib/asn/SensorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SensorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SensorLineSvg} />;

SensorLine.displayName = 'SensorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SensorLine);