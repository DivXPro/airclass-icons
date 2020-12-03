// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FunctionFillSvg from '@airclass/icons-svg/lib/asn/FunctionFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunctionFillSvg}></AntdIcon>;
};

FunctionFill.displayName = 'FunctionFill';
FunctionFill.inheritAttrs = false;
export default FunctionFill;