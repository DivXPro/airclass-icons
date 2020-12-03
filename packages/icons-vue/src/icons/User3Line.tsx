// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import User3LineSvg from '@airclass/icons-svg/lib/asn/User3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const User3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={User3LineSvg}></AntdIcon>;
};

User3Line.displayName = 'User3Line';
User3Line.inheritAttrs = false;
export default User3Line;