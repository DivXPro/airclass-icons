// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyPoundBoxLineSvg from '@airclass/icons-svg/lib/asn/MoneyPoundBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyPoundBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyPoundBoxLineSvg}></AntdIcon>;
};

MoneyPoundBoxLine.displayName = 'MoneyPoundBoxLine';
MoneyPoundBoxLine.inheritAttrs = false;
export default MoneyPoundBoxLine;