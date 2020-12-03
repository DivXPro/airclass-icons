// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShieldLineSvg from '@airclass/icons-svg/lib/asn/ShieldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShieldLineSvg} />;

ShieldLine.displayName = 'ShieldLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShieldLine);