// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SecurePaymentLineSvg from '@airclass/icons-svg/lib/asn/SecurePaymentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurePaymentLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurePaymentLineSvg}></AntdIcon>;
};

SecurePaymentLine.displayName = 'SecurePaymentLine';
SecurePaymentLine.inheritAttrs = false;
export default SecurePaymentLine;