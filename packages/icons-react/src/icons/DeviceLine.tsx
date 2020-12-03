// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeviceLineSvg from '@airclass/icons-svg/lib/asn/DeviceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeviceLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeviceLineSvg} />;

DeviceLine.displayName = 'DeviceLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeviceLine);