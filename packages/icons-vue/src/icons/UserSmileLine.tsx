// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSmileLineSvg from '@airclass/icons-svg/lib/asn/UserSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSmileLineSvg}></AntdIcon>;
};

UserSmileLine.displayName = 'UserSmileLine';
UserSmileLine.inheritAttrs = false;
export default UserSmileLine;