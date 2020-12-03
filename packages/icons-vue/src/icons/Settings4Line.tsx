// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Settings4LineSvg from '@airclass/icons-svg/lib/asn/Settings4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Settings4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Settings4LineSvg}></AntdIcon>;
};

Settings4Line.displayName = 'Settings4Line';
Settings4Line.inheritAttrs = false;
export default Settings4Line;