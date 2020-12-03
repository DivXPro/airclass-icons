// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CollageLineSvg from '@airclass/icons-svg/lib/asn/CollageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CollageLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CollageLineSvg} />;

CollageLine.displayName = 'CollageLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CollageLine);