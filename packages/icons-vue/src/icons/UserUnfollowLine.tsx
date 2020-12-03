// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserUnfollowLineSvg from '@airclass/icons-svg/lib/asn/UserUnfollowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserUnfollowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserUnfollowLineSvg}></AntdIcon>;
};

UserUnfollowLine.displayName = 'UserUnfollowLine';
UserUnfollowLine.inheritAttrs = false;
export default UserUnfollowLine;