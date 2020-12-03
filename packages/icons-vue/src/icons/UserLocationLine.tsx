// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserLocationLineSvg from '@airclass/icons-svg/lib/asn/UserLocationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserLocationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserLocationLineSvg}></AntdIcon>;
};

UserLocationLine.displayName = 'UserLocationLine';
UserLocationLine.inheritAttrs = false;
export default UserLocationLine;