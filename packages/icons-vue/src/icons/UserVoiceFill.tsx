// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserVoiceFillSvg from '@airclass/icons-svg/lib/asn/UserVoiceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserVoiceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserVoiceFillSvg}></AntdIcon>;
};

UserVoiceFill.displayName = 'UserVoiceFill';
UserVoiceFill.inheritAttrs = false;
export default UserVoiceFill;