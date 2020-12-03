// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserAddLineSvg from '@airclass/icons-svg/lib/asn/UserAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserAddLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserAddLineSvg} />;

UserAddLine.displayName = 'UserAddLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserAddLine);