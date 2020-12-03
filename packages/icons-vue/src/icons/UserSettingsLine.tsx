// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSettingsLineSvg from '@airclass/icons-svg/lib/asn/UserSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSettingsLineSvg}></AntdIcon>;
};

UserSettingsLine.displayName = 'UserSettingsLine';
UserSettingsLine.inheritAttrs = false;
export default UserSettingsLine;