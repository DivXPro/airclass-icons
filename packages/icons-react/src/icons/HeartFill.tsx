// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartFillSvg from '@airclass/icons-svg/lib/asn/HeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartFillSvg} />;

HeartFill.displayName = 'HeartFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartFill);