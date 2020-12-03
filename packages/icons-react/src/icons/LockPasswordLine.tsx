// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockPasswordLineSvg from '@airclass/icons-svg/lib/asn/LockPasswordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockPasswordLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockPasswordLineSvg} />;

LockPasswordLine.displayName = 'LockPasswordLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockPasswordLine);