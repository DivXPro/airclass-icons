// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingCartLineSvg from '@airclass/icons-svg/lib/asn/ShoppingCartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartLineSvg}></AntdIcon>;
};

ShoppingCartLine.displayName = 'ShoppingCartLine';
ShoppingCartLine.inheritAttrs = false;
export default ShoppingCartLine;