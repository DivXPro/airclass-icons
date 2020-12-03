// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalculatorFillSvg from '@airclass/icons-svg/lib/asn/CalculatorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorFillSvg}></AntdIcon>;
};

CalculatorFill.displayName = 'CalculatorFill';
CalculatorFill.inheritAttrs = false;
export default CalculatorFill;