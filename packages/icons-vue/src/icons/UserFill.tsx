// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserFillSvg from '@airclass/icons-svg/lib/asn/UserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserFillSvg}></AntdIcon>;
};

UserFill.displayName = 'UserFill';
UserFill.inheritAttrs = false;
export default UserFill;