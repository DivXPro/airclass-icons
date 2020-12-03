// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OrderPlayLineSvg from '@airclass/icons-svg/lib/asn/OrderPlayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrderPlayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OrderPlayLineSvg}></AntdIcon>;
};

OrderPlayLine.displayName = 'OrderPlayLine';
OrderPlayLine.inheritAttrs = false;
export default OrderPlayLine;