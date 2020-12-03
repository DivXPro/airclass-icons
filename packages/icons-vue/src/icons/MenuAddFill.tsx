// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuAddFillSvg from '@airclass/icons-svg/lib/asn/MenuAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuAddFillSvg}></AntdIcon>;
};

MenuAddFill.displayName = 'MenuAddFill';
MenuAddFill.inheritAttrs = false;
export default MenuAddFill;