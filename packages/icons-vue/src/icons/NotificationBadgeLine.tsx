// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationBadgeLineSvg from '@airclass/icons-svg/lib/asn/NotificationBadgeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationBadgeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBadgeLineSvg}></AntdIcon>;
};

NotificationBadgeLine.displayName = 'NotificationBadgeLine';
NotificationBadgeLine.inheritAttrs = false;
export default NotificationBadgeLine;