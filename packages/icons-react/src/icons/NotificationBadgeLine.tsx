// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationBadgeLineSvg from '@airclass/icons-svg/lib/asn/NotificationBadgeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationBadgeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationBadgeLineSvg} />;

NotificationBadgeLine.displayName = 'NotificationBadgeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationBadgeLine);