// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BatteryLowLineSvg from '@airclass/icons-svg/lib/asn/BatteryLowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryLowLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BatteryLowLineSvg} />;

BatteryLowLine.displayName = 'BatteryLowLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BatteryLowLine);