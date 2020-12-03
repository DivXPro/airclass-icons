// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeFundsFillSvg from '@airclass/icons-svg/lib/asn/ExchangeFundsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeFundsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeFundsFillSvg}></AntdIcon>;
};

ExchangeFundsFill.displayName = 'ExchangeFundsFill';
ExchangeFundsFill.inheritAttrs = false;
export default ExchangeFundsFill;