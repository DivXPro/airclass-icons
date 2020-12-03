// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeDollarFillSvg from '@airclass/icons-svg/lib/asn/ExchangeDollarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeDollarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeDollarFillSvg}></AntdIcon>;
};

ExchangeDollarFill.displayName = 'ExchangeDollarFill';
ExchangeDollarFill.inheritAttrs = false;
export default ExchangeDollarFill;