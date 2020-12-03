// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BracketsLineSvg from '@airclass/icons-svg/lib/asn/BracketsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BracketsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BracketsLineSvg} />;

BracketsLine.displayName = 'BracketsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BracketsLine);