// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HotspotLineSvg from '@airclass/icons-svg/lib/asn/HotspotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotspotLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HotspotLineSvg} />;

HotspotLine.displayName = 'HotspotLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HotspotLine);