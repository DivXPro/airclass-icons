// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyPoundCircleLineSvg from '@airclass/icons-svg/lib/asn/MoneyPoundCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyPoundCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyPoundCircleLineSvg}></AntdIcon>;
};

MoneyPoundCircleLine.displayName = 'MoneyPoundCircleLine';
MoneyPoundCircleLine.inheritAttrs = false;
export default MoneyPoundCircleLine;