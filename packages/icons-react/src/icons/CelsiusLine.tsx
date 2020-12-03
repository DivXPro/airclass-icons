// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CelsiusLineSvg from '@airclass/icons-svg/lib/asn/CelsiusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CelsiusLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CelsiusLineSvg} />;

CelsiusLine.displayName = 'CelsiusLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CelsiusLine);