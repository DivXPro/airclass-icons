// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationFillSvg from '@airclass/icons-svg/lib/asn/NotificationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationFillSvg} />;

NotificationFill.displayName = 'NotificationFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationFill);