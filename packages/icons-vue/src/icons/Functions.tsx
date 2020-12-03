// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FunctionsSvg from '@airclass/icons-svg/lib/asn/Functions';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Functions = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunctionsSvg}></AntdIcon>;
};

Functions.displayName = 'Functions';
Functions.inheritAttrs = false;
export default Functions;