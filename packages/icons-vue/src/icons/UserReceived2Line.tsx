// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserReceived2LineSvg from '@airclass/icons-svg/lib/asn/UserReceived2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserReceived2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserReceived2LineSvg}></AntdIcon>;
};

UserReceived2Line.displayName = 'UserReceived2Line';
UserReceived2Line.inheritAttrs = false;
export default UserReceived2Line;