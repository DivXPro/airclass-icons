// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Notification2LineSvg from '@airclass/icons-svg/lib/asn/Notification2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Notification2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification2LineSvg}></AntdIcon>;
};

Notification2Line.displayName = 'Notification2Line';
Notification2Line.inheritAttrs = false;
export default Notification2Line;