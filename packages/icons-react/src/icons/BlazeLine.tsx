// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BlazeLineSvg from '@airclass/icons-svg/lib/asn/BlazeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlazeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BlazeLineSvg} />;

BlazeLine.displayName = 'BlazeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BlazeLine);