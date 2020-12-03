// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Menu4LineSvg from '@airclass/icons-svg/lib/asn/Menu4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Menu4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu4LineSvg}></AntdIcon>;
};

Menu4Line.displayName = 'Menu4Line';
Menu4Line.inheritAttrs = false;
export default Menu4Line;