// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserHeartFillSvg from '@airclass/icons-svg/lib/asn/UserHeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserHeartFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserHeartFillSvg} />;

UserHeartFill.displayName = 'UserHeartFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserHeartFill);