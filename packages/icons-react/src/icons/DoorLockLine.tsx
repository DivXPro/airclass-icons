// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DoorLockLineSvg from '@airclass/icons-svg/lib/asn/DoorLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoorLockLineSvg} />;

DoorLockLine.displayName = 'DoorLockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoorLockLine);