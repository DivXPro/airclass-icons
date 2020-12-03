// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SecurePaymentFillSvg from '@airclass/icons-svg/lib/asn/SecurePaymentFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurePaymentFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurePaymentFillSvg}></AntdIcon>;
};

SecurePaymentFill.displayName = 'SecurePaymentFill';
SecurePaymentFill.inheritAttrs = false;
export default SecurePaymentFill;