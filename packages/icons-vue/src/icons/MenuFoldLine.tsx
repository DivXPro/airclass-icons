// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuFoldLineSvg from '@airclass/icons-svg/lib/asn/MenuFoldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuFoldLineSvg}></AntdIcon>;
};

MenuFoldLine.displayName = 'MenuFoldLine';
MenuFoldLine.inheritAttrs = false;
export default MenuFoldLine;