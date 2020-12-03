// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingCartFillSvg from '@airclass/icons-svg/lib/asn/ShoppingCartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartFillSvg}></AntdIcon>;
};

ShoppingCartFill.displayName = 'ShoppingCartFill';
ShoppingCartFill.inheritAttrs = false;
export default ShoppingCartFill;