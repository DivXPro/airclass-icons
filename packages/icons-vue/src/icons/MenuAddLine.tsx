// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuAddLineSvg from '@airclass/icons-svg/lib/asn/MenuAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuAddLineSvg}></AntdIcon>;
};

MenuAddLine.displayName = 'MenuAddLine';
MenuAddLine.inheritAttrs = false;
export default MenuAddLine;