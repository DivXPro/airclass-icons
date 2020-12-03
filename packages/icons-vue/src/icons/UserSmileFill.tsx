// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSmileFillSvg from '@airclass/icons-svg/lib/asn/UserSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSmileFillSvg}></AntdIcon>;
};

UserSmileFill.displayName = 'UserSmileFill';
UserSmileFill.inheritAttrs = false;
export default UserSmileFill;