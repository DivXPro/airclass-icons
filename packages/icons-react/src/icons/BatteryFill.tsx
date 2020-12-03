// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BatteryFillSvg from '@airclass/icons-svg/lib/asn/BatteryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BatteryFillSvg} />;

BatteryFill.displayName = 'BatteryFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BatteryFill);