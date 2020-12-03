// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import User2LineSvg from '@airclass/icons-svg/lib/asn/User2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const User2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={User2LineSvg}></AntdIcon>;
};

User2Line.displayName = 'User2Line';
User2Line.inheritAttrs = false;
export default User2Line;