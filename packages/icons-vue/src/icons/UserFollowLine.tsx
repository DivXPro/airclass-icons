// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserFollowLineSvg from '@airclass/icons-svg/lib/asn/UserFollowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserFollowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserFollowLineSvg}></AntdIcon>;
};

UserFollowLine.displayName = 'UserFollowLine';
UserFollowLine.inheritAttrs = false;
export default UserFollowLine;