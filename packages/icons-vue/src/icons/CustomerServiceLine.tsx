// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CustomerServiceLineSvg from '@airclass/icons-svg/lib/asn/CustomerServiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CustomerServiceLineSvg}></AntdIcon>;
};

CustomerServiceLine.displayName = 'CustomerServiceLine';
CustomerServiceLine.inheritAttrs = false;
export default CustomerServiceLine;