// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeBoxLineSvg from '@airclass/icons-svg/lib/asn/ExchangeBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeBoxLineSvg}></AntdIcon>;
};

ExchangeBoxLine.displayName = 'ExchangeBoxLine';
ExchangeBoxLine.inheritAttrs = false;
export default ExchangeBoxLine;