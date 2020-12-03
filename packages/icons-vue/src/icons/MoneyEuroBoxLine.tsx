// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyEuroBoxLineSvg from '@airclass/icons-svg/lib/asn/MoneyEuroBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyEuroBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyEuroBoxLineSvg}></AntdIcon>;
};

MoneyEuroBoxLine.displayName = 'MoneyEuroBoxLine';
MoneyEuroBoxLine.inheritAttrs = false;
export default MoneyEuroBoxLine;