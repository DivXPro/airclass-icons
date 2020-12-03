// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationOffFillSvg from '@airclass/icons-svg/lib/asn/NotificationOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationOffFillSvg}></AntdIcon>;
};

NotificationOffFill.displayName = 'NotificationOffFill';
NotificationOffFill.inheritAttrs = false;
export default NotificationOffFill;