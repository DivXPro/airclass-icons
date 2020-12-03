// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrademarkLineSvg from '@airclass/icons-svg/lib/asn/TrademarkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkLineSvg}></AntdIcon>;
};

TrademarkLine.displayName = 'TrademarkLine';
TrademarkLine.inheritAttrs = false;
export default TrademarkLine;