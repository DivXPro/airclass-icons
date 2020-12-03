// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalculatorLineSvg from '@airclass/icons-svg/lib/asn/CalculatorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorLineSvg}></AntdIcon>;
};

CalculatorLine.displayName = 'CalculatorLine';
CalculatorLine.inheritAttrs = false;
export default CalculatorLine;