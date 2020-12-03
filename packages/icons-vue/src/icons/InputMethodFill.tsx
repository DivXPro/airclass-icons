// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InputMethodFillSvg from '@airclass/icons-svg/lib/asn/InputMethodFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InputMethodFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InputMethodFillSvg}></AntdIcon>;
};

InputMethodFill.displayName = 'InputMethodFill';
InputMethodFill.inheritAttrs = false;
export default InputMethodFill;