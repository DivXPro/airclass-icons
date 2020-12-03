// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SubwayLineSvg from '@airclass/icons-svg/lib/asn/SubwayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubwayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubwayLineSvg} />;

SubwayLine.displayName = 'SubwayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubwayLine);