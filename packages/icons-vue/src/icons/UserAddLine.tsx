// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserAddLineSvg from '@airclass/icons-svg/lib/asn/UserAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddLineSvg}></AntdIcon>;
};

UserAddLine.displayName = 'UserAddLine';
UserAddLine.inheritAttrs = false;
export default UserAddLine;