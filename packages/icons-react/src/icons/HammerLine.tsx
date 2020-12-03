// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HammerLineSvg from '@airclass/icons-svg/lib/asn/HammerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HammerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HammerLineSvg} />;

HammerLine.displayName = 'HammerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HammerLine);