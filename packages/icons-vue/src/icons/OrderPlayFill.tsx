// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OrderPlayFillSvg from '@airclass/icons-svg/lib/asn/OrderPlayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrderPlayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OrderPlayFillSvg}></AntdIcon>;
};

OrderPlayFill.displayName = 'OrderPlayFill';
OrderPlayFill.inheritAttrs = false;
export default OrderPlayFill;