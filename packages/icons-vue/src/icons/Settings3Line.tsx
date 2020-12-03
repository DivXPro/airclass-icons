// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Settings3LineSvg from '@airclass/icons-svg/lib/asn/Settings3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Settings3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Settings3LineSvg}></AntdIcon>;
};

Settings3Line.displayName = 'Settings3Line';
Settings3Line.inheritAttrs = false;
export default Settings3Line;