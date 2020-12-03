// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DriveLineSvg from '@airclass/icons-svg/lib/asn/DriveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DriveLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DriveLineSvg} />;

DriveLine.displayName = 'DriveLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DriveLine);