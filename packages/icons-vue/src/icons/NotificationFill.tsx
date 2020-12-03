// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationFillSvg from '@airclass/icons-svg/lib/asn/NotificationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFillSvg}></AntdIcon>;
};

NotificationFill.displayName = 'NotificationFill';
NotificationFill.inheritAttrs = false;
export default NotificationFill;