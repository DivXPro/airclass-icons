// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BatteryLineSvg from '@airclass/icons-svg/lib/asn/BatteryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BatteryLineSvg} />;

BatteryLine.displayName = 'BatteryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BatteryLine);