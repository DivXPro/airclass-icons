// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSharedFillSvg from '@airclass/icons-svg/lib/asn/UserSharedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSharedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSharedFillSvg}></AntdIcon>;
};

UserSharedFill.displayName = 'UserSharedFill';
UserSharedFill.inheritAttrs = false;
export default UserSharedFill;