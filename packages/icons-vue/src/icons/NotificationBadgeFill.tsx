// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationBadgeFillSvg from '@airclass/icons-svg/lib/asn/NotificationBadgeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationBadgeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBadgeFillSvg}></AntdIcon>;
};

NotificationBadgeFill.displayName = 'NotificationBadgeFill';
NotificationBadgeFill.inheritAttrs = false;
export default NotificationBadgeFill;