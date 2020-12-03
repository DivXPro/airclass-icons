// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserStarLineSvg from '@airclass/icons-svg/lib/asn/UserStarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserStarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserStarLineSvg}></AntdIcon>;
};

UserStarLine.displayName = 'UserStarLine';
UserStarLine.inheritAttrs = false;
export default UserStarLine;