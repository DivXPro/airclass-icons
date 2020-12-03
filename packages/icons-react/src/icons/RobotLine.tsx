// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RobotLineSvg from '@airclass/icons-svg/lib/asn/RobotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RobotLineSvg} />;

RobotLine.displayName = 'RobotLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RobotLine);