// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RoadMapLineSvg from '@airclass/icons-svg/lib/asn/RoadMapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoadMapLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RoadMapLineSvg} />;

RoadMapLine.displayName = 'RoadMapLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RoadMapLine);