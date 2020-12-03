// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSearchLineSvg from '@airclass/icons-svg/lib/asn/UserSearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSearchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchLineSvg}></AntdIcon>;
};

UserSearchLine.displayName = 'UserSearchLine';
UserSearchLine.inheritAttrs = false;
export default UserSearchLine;