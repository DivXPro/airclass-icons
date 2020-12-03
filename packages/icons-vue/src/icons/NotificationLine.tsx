// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationLineSvg from '@airclass/icons-svg/lib/asn/NotificationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationLineSvg}></AntdIcon>;
};

NotificationLine.displayName = 'NotificationLine';
NotificationLine.inheritAttrs = false;
export default NotificationLine;