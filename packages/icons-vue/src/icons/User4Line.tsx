// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import User4LineSvg from '@airclass/icons-svg/lib/asn/User4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const User4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={User4LineSvg}></AntdIcon>;
};

User4Line.displayName = 'User4Line';
User4Line.inheritAttrs = false;
export default User4Line;