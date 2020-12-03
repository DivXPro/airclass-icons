// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserReceivedLineSvg from '@airclass/icons-svg/lib/asn/UserReceivedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserReceivedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserReceivedLineSvg}></AntdIcon>;
};

UserReceivedLine.displayName = 'UserReceivedLine';
UserReceivedLine.inheritAttrs = false;
export default UserReceivedLine;