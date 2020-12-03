// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeCnyFillSvg from '@airclass/icons-svg/lib/asn/ExchangeCnyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeCnyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeCnyFillSvg}></AntdIcon>;
};

ExchangeCnyFill.displayName = 'ExchangeCnyFill';
ExchangeCnyFill.inheritAttrs = false;
export default ExchangeCnyFill;