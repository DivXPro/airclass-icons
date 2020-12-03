// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuFoldFillSvg from '@airclass/icons-svg/lib/asn/MenuFoldFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuFoldFillSvg}></AntdIcon>;
};

MenuFoldFill.displayName = 'MenuFoldFill';
MenuFoldFill.inheritAttrs = false;
export default MenuFoldFill;