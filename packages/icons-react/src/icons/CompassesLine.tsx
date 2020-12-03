// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassesLineSvg from '@airclass/icons-svg/lib/asn/CompassesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassesLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassesLineSvg} />;

CompassesLine.displayName = 'CompassesLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassesLine);