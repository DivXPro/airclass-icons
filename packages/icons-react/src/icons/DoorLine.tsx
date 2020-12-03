// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DoorLineSvg from '@airclass/icons-svg/lib/asn/DoorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoorLineSvg} />;

DoorLine.displayName = 'DoorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoorLine);