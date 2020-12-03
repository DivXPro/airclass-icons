// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BatteryShareLineSvg from '@airclass/icons-svg/lib/asn/BatteryShareLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatteryShareLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BatteryShareLineSvg} />;

BatteryShareLine.displayName = 'BatteryShareLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BatteryShareLine);