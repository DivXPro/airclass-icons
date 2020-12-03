// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LungsLineSvg from '@airclass/icons-svg/lib/asn/LungsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LungsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LungsLineSvg} />;

LungsLine.displayName = 'LungsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LungsLine);