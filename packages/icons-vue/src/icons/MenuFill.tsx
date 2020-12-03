// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuFillSvg from '@airclass/icons-svg/lib/asn/MenuFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuFillSvg}></AntdIcon>;
};

MenuFill.displayName = 'MenuFill';
MenuFill.inheritAttrs = false;
export default MenuFill;