// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserLocationFillSvg from '@airclass/icons-svg/lib/asn/UserLocationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserLocationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserLocationFillSvg}></AntdIcon>;
};

UserLocationFill.displayName = 'UserLocationFill';
UserLocationFill.inheritAttrs = false;
export default UserLocationFill;