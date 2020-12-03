// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadarLineSvg from '@airclass/icons-svg/lib/asn/RadarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadarLineSvg} />;

RadarLine.displayName = 'RadarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RadarLine);