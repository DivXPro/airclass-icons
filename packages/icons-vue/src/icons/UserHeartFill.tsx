// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserHeartFillSvg from '@airclass/icons-svg/lib/asn/UserHeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserHeartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserHeartFillSvg}></AntdIcon>;
};

UserHeartFill.displayName = 'UserHeartFill';
UserHeartFill.inheritAttrs = false;
export default UserHeartFill;