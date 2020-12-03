// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GhostLineSvg from '@airclass/icons-svg/lib/asn/GhostLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GhostLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GhostLineSvg} />;

GhostLine.displayName = 'GhostLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GhostLine);