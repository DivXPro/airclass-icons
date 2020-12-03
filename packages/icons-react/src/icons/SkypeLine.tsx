// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkypeLineSvg from '@airclass/icons-svg/lib/asn/SkypeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkypeLineSvg} />;

SkypeLine.displayName = 'SkypeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkypeLine);