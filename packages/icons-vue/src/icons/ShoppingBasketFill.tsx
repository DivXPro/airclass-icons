// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingBasketFillSvg from '@airclass/icons-svg/lib/asn/ShoppingBasketFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingBasketFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBasketFillSvg}></AntdIcon>;
};

ShoppingBasketFill.displayName = 'ShoppingBasketFill';
ShoppingBasketFill.inheritAttrs = false;
export default ShoppingBasketFill;