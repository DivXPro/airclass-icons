// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Menu2LineSvg from '@airclass/icons-svg/lib/asn/Menu2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Menu2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu2LineSvg}></AntdIcon>;
};

Menu2Line.displayName = 'Menu2Line';
Menu2Line.inheritAttrs = false;
export default Menu2Line;