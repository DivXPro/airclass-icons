// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartsFillSvg from '@airclass/icons-svg/lib/asn/HeartsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartsFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartsFillSvg} />;

HeartsFill.displayName = 'HeartsFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartsFill);