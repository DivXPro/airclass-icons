// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserHeartLineSvg from '@airclass/icons-svg/lib/asn/UserHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserHeartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserHeartLineSvg}></AntdIcon>;
};

UserHeartLine.displayName = 'UserHeartLine';
UserHeartLine.inheritAttrs = false;
export default UserHeartLine;