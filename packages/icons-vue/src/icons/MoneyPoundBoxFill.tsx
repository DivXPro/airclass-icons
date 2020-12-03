// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyPoundBoxFillSvg from '@airclass/icons-svg/lib/asn/MoneyPoundBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyPoundBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyPoundBoxFillSvg}></AntdIcon>;
};

MoneyPoundBoxFill.displayName = 'MoneyPoundBoxFill';
MoneyPoundBoxFill.inheritAttrs = false;
export default MoneyPoundBoxFill;