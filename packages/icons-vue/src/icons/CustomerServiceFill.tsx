// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CustomerServiceFillSvg from '@airclass/icons-svg/lib/asn/CustomerServiceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CustomerServiceFillSvg}></AntdIcon>;
};

CustomerServiceFill.displayName = 'CustomerServiceFill';
CustomerServiceFill.inheritAttrs = false;
export default CustomerServiceFill;