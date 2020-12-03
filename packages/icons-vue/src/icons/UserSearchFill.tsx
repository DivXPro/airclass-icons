// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSearchFillSvg from '@airclass/icons-svg/lib/asn/UserSearchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSearchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchFillSvg}></AntdIcon>;
};

UserSearchFill.displayName = 'UserSearchFill';
UserSearchFill.inheritAttrs = false;
export default UserSearchFill;