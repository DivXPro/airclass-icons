// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KnifeLineSvg from '@airclass/icons-svg/lib/asn/KnifeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KnifeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KnifeLineSvg} />;

KnifeLine.displayName = 'KnifeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KnifeLine);