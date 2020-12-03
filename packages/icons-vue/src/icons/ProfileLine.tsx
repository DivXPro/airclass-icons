// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProfileLineSvg from '@airclass/icons-svg/lib/asn/ProfileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileLineSvg}></AntdIcon>;
};

ProfileLine.displayName = 'ProfileLine';
ProfileLine.inheritAttrs = false;
export default ProfileLine;