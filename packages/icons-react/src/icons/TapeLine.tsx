// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TapeLineSvg from '@airclass/icons-svg/lib/asn/TapeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TapeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TapeLineSvg} />;

TapeLine.displayName = 'TapeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TapeLine);