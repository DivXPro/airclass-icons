// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MapPinLineSvg from '@airclass/icons-svg/lib/asn/MapPinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MapPinLineSvg} />;

MapPinLine.displayName = 'MapPinLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MapPinLine);