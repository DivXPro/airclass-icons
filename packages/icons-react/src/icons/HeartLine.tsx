// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartLineSvg from '@airclass/icons-svg/lib/asn/HeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartLineSvg} />;

HeartLine.displayName = 'HeartLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartLine);