// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Notification3LineSvg from '@airclass/icons-svg/lib/asn/Notification3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Notification3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification3LineSvg}></AntdIcon>;
};

Notification3Line.displayName = 'Notification3Line';
Notification3Line.inheritAttrs = false;
export default Notification3Line;