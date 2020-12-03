// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuUnfoldLineSvg from '@airclass/icons-svg/lib/asn/MenuUnfoldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuUnfoldLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuUnfoldLineSvg}></AntdIcon>;
};

MenuUnfoldLine.displayName = 'MenuUnfoldLine';
MenuUnfoldLine.inheritAttrs = false;
export default MenuUnfoldLine;