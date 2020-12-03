// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserLineSvg from '@airclass/icons-svg/lib/asn/UserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserLineSvg}></AntdIcon>;
};

UserLine.displayName = 'UserLine';
UserLine.inheritAttrs = false;
export default UserLine;