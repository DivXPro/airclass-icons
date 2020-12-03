// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyEuroCircleLineSvg from '@airclass/icons-svg/lib/asn/MoneyEuroCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyEuroCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyEuroCircleLineSvg}></AntdIcon>;
};

MoneyEuroCircleLine.displayName = 'MoneyEuroCircleLine';
MoneyEuroCircleLine.inheritAttrs = false;
export default MoneyEuroCircleLine;