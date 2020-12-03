// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FloodLineSvg from '@airclass/icons-svg/lib/asn/FloodLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FloodLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FloodLineSvg} />;

FloodLine.displayName = 'FloodLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FloodLine);