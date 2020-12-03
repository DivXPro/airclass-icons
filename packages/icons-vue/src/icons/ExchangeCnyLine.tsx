// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeCnyLineSvg from '@airclass/icons-svg/lib/asn/ExchangeCnyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeCnyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeCnyLineSvg}></AntdIcon>;
};

ExchangeCnyLine.displayName = 'ExchangeCnyLine';
ExchangeCnyLine.inheritAttrs = false;
export default ExchangeCnyLine;