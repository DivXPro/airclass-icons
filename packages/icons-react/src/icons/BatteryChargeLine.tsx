// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BatteryChargeLineSvg from '@airclass/icons-svg/lib/asn/BatteryChargeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryChargeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BatteryChargeLineSvg} />;

BatteryChargeLine.displayName = 'BatteryChargeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BatteryChargeLine);