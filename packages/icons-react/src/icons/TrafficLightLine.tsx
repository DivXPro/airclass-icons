// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrafficLightLineSvg from '@airclass/icons-svg/lib/asn/TrafficLightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrafficLightLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrafficLightLineSvg} />;

TrafficLightLine.displayName = 'TrafficLightLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrafficLightLine);