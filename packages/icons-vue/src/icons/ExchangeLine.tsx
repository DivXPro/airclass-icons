// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeLineSvg from '@airclass/icons-svg/lib/asn/ExchangeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeLineSvg}></AntdIcon>;
};

ExchangeLine.displayName = 'ExchangeLine';
ExchangeLine.inheritAttrs = false;
export default ExchangeLine;