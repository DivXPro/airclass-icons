// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeFundsLineSvg from '@airclass/icons-svg/lib/asn/ExchangeFundsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeFundsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeFundsLineSvg}></AntdIcon>;
};

ExchangeFundsLine.displayName = 'ExchangeFundsLine';
ExchangeFundsLine.inheritAttrs = false;
export default ExchangeFundsLine;