// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StockFillSvg from '@airclass/icons-svg/lib/asn/StockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StockFillSvg}></AntdIcon>;
};

StockFill.displayName = 'StockFill';
StockFill.inheritAttrs = false;
export default StockFill;