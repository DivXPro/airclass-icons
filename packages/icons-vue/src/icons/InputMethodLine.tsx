// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InputMethodLineSvg from '@airclass/icons-svg/lib/asn/InputMethodLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InputMethodLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InputMethodLineSvg}></AntdIcon>;
};

InputMethodLine.displayName = 'InputMethodLine';
InputMethodLine.inheritAttrs = false;
export default InputMethodLine;