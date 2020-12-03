// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserHeartLineSvg from '@airclass/icons-svg/lib/asn/UserHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserHeartLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserHeartLineSvg} />;

UserHeartLine.displayName = 'UserHeartLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserHeartLine);