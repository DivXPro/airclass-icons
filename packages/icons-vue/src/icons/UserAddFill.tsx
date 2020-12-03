// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserAddFillSvg from '@airclass/icons-svg/lib/asn/UserAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddFillSvg}></AntdIcon>;
};

UserAddFill.displayName = 'UserAddFill';
UserAddFill.inheritAttrs = false;
export default UserAddFill;