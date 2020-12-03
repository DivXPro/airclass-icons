// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StockLineSvg from '@airclass/icons-svg/lib/asn/StockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StockLineSvg}></AntdIcon>;
};

StockLine.displayName = 'StockLine';
StockLine.inheritAttrs = false;
export default StockLine;