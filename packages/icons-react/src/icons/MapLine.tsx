// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MapLineSvg from '@airclass/icons-svg/lib/asn/MapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MapLineSvg} />;

MapLine.displayName = 'MapLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MapLine);