// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NumbersLineSvg from '@airclass/icons-svg/lib/asn/NumbersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumbersLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NumbersLineSvg}></AntdIcon>;
};

NumbersLine.displayName = 'NumbersLine';
NumbersLine.inheritAttrs = false;
export default NumbersLine;