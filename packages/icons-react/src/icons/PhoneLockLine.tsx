// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneLockLineSvg from '@airclass/icons-svg/lib/asn/PhoneLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneLockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneLockLineSvg} />;

PhoneLockLine.displayName = 'PhoneLockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneLockLine);