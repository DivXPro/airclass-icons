// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationOffLineSvg from '@airclass/icons-svg/lib/asn/NotificationOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationOffLineSvg}></AntdIcon>;
};

NotificationOffLine.displayName = 'NotificationOffLine';
NotificationOffLine.inheritAttrs = false;
export default NotificationOffLine;