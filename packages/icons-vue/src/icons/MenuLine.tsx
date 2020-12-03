// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuLineSvg from '@airclass/icons-svg/lib/asn/MenuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuLineSvg}></AntdIcon>;
};

MenuLine.displayName = 'MenuLine';
MenuLine.inheritAttrs = false;
export default MenuLine;