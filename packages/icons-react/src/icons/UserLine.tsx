// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserLineSvg from '@airclass/icons-svg/lib/asn/UserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserLineSvg} />;

UserLine.displayName = 'UserLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserLine);