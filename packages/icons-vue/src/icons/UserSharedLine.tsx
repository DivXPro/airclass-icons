// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSharedLineSvg from '@airclass/icons-svg/lib/asn/UserSharedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSharedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSharedLineSvg}></AntdIcon>;
};

UserSharedLine.displayName = 'UserSharedLine';
UserSharedLine.inheritAttrs = false;
export default UserSharedLine;