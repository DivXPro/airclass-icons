// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingCart2LineSvg from '@airclass/icons-svg/lib/asn/ShoppingCart2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCart2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCart2LineSvg}></AntdIcon>;
};

ShoppingCart2Line.displayName = 'ShoppingCart2Line';
ShoppingCart2Line.inheritAttrs = false;
export default ShoppingCart2Line;