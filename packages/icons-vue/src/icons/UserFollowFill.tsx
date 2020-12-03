// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserFollowFillSvg from '@airclass/icons-svg/lib/asn/UserFollowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserFollowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserFollowFillSvg}></AntdIcon>;
};

UserFollowFill.displayName = 'UserFollowFill';
UserFollowFill.inheritAttrs = false;
export default UserFollowFill;