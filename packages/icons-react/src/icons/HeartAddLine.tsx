// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartAddLineSvg from '@airclass/icons-svg/lib/asn/HeartAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartAddLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartAddLineSvg} />;

HeartAddLine.displayName = 'HeartAddLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartAddLine);