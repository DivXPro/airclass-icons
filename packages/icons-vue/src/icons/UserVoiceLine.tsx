// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserVoiceLineSvg from '@airclass/icons-svg/lib/asn/UserVoiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserVoiceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserVoiceLineSvg}></AntdIcon>;
};

UserVoiceLine.displayName = 'UserVoiceLine';
UserVoiceLine.inheritAttrs = false;
export default UserVoiceLine;