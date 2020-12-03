// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationLineSvg from '@airclass/icons-svg/lib/asn/NotificationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationLineSvg} />;

NotificationLine.displayName = 'NotificationLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationLine);