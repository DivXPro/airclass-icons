// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyDollarBoxLineSvg from '@airclass/icons-svg/lib/asn/MoneyDollarBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyDollarBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyDollarBoxLineSvg}></AntdIcon>;
};

MoneyDollarBoxLine.displayName = 'MoneyDollarBoxLine';
MoneyDollarBoxLine.inheritAttrs = false;
export default MoneyDollarBoxLine;