// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassLineSvg from '@airclass/icons-svg/lib/asn/CompassLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassLineSvg} />;

CompassLine.displayName = 'CompassLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassLine);