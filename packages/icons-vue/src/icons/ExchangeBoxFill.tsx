// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeBoxFillSvg from '@airclass/icons-svg/lib/asn/ExchangeBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeBoxFillSvg}></AntdIcon>;
};

ExchangeBoxFill.displayName = 'ExchangeBoxFill';
ExchangeBoxFill.inheritAttrs = false;
export default ExchangeBoxFill;