// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseLineSvg from '@airclass/icons-svg/lib/asn/PauseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseLineSvg} />;

PauseLine.displayName = 'PauseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseLine);