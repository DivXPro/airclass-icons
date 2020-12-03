// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Notification4LineSvg from '@airclass/icons-svg/lib/asn/Notification4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Notification4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification4LineSvg}></AntdIcon>;
};

Notification4Line.displayName = 'Notification4Line';
Notification4Line.inheritAttrs = false;
export default Notification4Line;