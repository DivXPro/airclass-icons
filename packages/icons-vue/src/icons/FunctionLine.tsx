// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FunctionLineSvg from '@airclass/icons-svg/lib/asn/FunctionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunctionLineSvg}></AntdIcon>;
};

FunctionLine.displayName = 'FunctionLine';
FunctionLine.inheritAttrs = false;
export default FunctionLine;