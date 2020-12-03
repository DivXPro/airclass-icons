// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingBagFillSvg from '@airclass/icons-svg/lib/asn/ShoppingBagFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingBagFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagFillSvg}></AntdIcon>;
};

ShoppingBagFill.displayName = 'ShoppingBagFill';
ShoppingBagFill.inheritAttrs = false;
export default ShoppingBagFill;