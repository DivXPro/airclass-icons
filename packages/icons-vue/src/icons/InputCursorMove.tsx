// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InputCursorMoveSvg from '@airclass/icons-svg/lib/asn/InputCursorMove';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InputCursorMove = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InputCursorMoveSvg}></AntdIcon>;
};

InputCursorMove.displayName = 'InputCursorMove';
InputCursorMove.inheritAttrs = false;
export default InputCursorMove;