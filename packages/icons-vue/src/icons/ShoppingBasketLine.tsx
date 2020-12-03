// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingBasketLineSvg from '@airclass/icons-svg/lib/asn/ShoppingBasketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingBasketLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBasketLineSvg}></AntdIcon>;
};

ShoppingBasketLine.displayName = 'ShoppingBasketLine';
ShoppingBasketLine.inheritAttrs = false;
export default ShoppingBasketLine;