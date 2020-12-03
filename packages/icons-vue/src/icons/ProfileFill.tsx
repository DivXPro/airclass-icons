// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProfileFillSvg from '@airclass/icons-svg/lib/asn/ProfileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileFillSvg}></AntdIcon>;
};

ProfileFill.displayName = 'ProfileFill';
ProfileFill.inheritAttrs = false;
export default ProfileFill;