// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HailLineSvg from '@airclass/icons-svg/lib/asn/HailLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HailLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HailLineSvg} />;

HailLine.displayName = 'HailLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HailLine);