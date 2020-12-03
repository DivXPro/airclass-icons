// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Settings2LineSvg from '@airclass/icons-svg/lib/asn/Settings2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Settings2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Settings2LineSvg}></AntdIcon>;
};

Settings2Line.displayName = 'Settings2Line';
Settings2Line.inheritAttrs = false;
export default Settings2Line;