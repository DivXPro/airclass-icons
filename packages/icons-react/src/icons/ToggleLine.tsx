// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ToggleLineSvg from '@airclass/icons-svg/lib/asn/ToggleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToggleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToggleLineSvg} />;

ToggleLine.displayName = 'ToggleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ToggleLine);