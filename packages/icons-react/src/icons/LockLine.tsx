// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockLineSvg from '@airclass/icons-svg/lib/asn/LockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockLineSvg} />;

LockLine.displayName = 'LockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockLine);