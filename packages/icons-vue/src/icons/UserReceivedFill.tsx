// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserReceivedFillSvg from '@airclass/icons-svg/lib/asn/UserReceivedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserReceivedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserReceivedFillSvg}></AntdIcon>;
};

UserReceivedFill.displayName = 'UserReceivedFill';
UserReceivedFill.inheritAttrs = false;
export default UserReceivedFill;