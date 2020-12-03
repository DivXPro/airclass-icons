// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSettingsFillSvg from '@airclass/icons-svg/lib/asn/UserSettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSettingsFillSvg}></AntdIcon>;
};

UserSettingsFill.displayName = 'UserSettingsFill';
UserSettingsFill.inheritAttrs = false;
export default UserSettingsFill;