// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WalkLineSvg from '@airclass/icons-svg/lib/asn/WalkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalkLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WalkLineSvg} />;

WalkLine.displayName = 'WalkLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalkLine);