// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MouseLineSvg from '@airclass/icons-svg/lib/asn/MouseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MouseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MouseLineSvg} />;

MouseLine.displayName = 'MouseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MouseLine);