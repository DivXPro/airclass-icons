// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RefundFillSvg from '@airclass/icons-svg/lib/asn/RefundFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefundFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefundFillSvg}></AntdIcon>;
};

RefundFill.displayName = 'RefundFill';
RefundFill.inheritAttrs = false;
export default RefundFill;