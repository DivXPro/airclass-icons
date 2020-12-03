// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneLineSvg from '@airclass/icons-svg/lib/asn/PhoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneLineSvg} />;

PhoneLine.displayName = 'PhoneLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneLine);