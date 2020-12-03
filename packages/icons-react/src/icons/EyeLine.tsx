// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeLineSvg from '@airclass/icons-svg/lib/asn/EyeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeLineSvg} />;

EyeLine.displayName = 'EyeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeLine);