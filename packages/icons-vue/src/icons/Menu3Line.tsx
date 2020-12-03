// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Menu3LineSvg from '@airclass/icons-svg/lib/asn/Menu3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Menu3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu3LineSvg}></AntdIcon>;
};

Menu3Line.displayName = 'Menu3Line';
Menu3Line.inheritAttrs = false;
export default Menu3Line;