// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HqLineSvg from '@airclass/icons-svg/lib/asn/HqLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HqLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HqLineSvg} />;

HqLine.displayName = 'HqLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HqLine);