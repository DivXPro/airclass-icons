// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CurrencyFillSvg from '@airclass/icons-svg/lib/asn/CurrencyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CurrencyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CurrencyFillSvg}></AntdIcon>;
};

CurrencyFill.displayName = 'CurrencyFill';
CurrencyFill.inheritAttrs = false;
export default CurrencyFill;