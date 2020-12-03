// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SteeringLineSvg from '@airclass/icons-svg/lib/asn/SteeringLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteeringLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SteeringLineSvg} />;

SteeringLine.displayName = 'SteeringLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SteeringLine);