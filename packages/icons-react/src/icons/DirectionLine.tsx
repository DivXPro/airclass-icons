// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DirectionLineSvg from '@airclass/icons-svg/lib/asn/DirectionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectionLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DirectionLineSvg} />;

DirectionLine.displayName = 'DirectionLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DirectionLine);