// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserStarFillSvg from '@airclass/icons-svg/lib/asn/UserStarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserStarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserStarFillSvg}></AntdIcon>;
};

UserStarFill.displayName = 'UserStarFill';
UserStarFill.inheritAttrs = false;
export default UserStarFill;