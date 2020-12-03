// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrademarkFillSvg from '@airclass/icons-svg/lib/asn/TrademarkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkFillSvg}></AntdIcon>;
};

TrademarkFill.displayName = 'TrademarkFill';
TrademarkFill.inheritAttrs = false;
export default TrademarkFill;