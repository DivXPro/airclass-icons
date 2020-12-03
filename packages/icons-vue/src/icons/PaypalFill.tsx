// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaypalFillSvg from '@airclass/icons-svg/lib/asn/PaypalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaypalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaypalFillSvg}></AntdIcon>;
};

PaypalFill.displayName = 'PaypalFill';
PaypalFill.inheritAttrs = false;
export default PaypalFill;