// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeDollarLineSvg from '@airclass/icons-svg/lib/asn/ExchangeDollarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeDollarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeDollarLineSvg}></AntdIcon>;
};

ExchangeDollarLine.displayName = 'ExchangeDollarLine';
ExchangeDollarLine.inheritAttrs = false;
export default ExchangeDollarLine;