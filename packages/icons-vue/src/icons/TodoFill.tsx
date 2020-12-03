// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TodoFillSvg from '@airclass/icons-svg/lib/asn/TodoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TodoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TodoFillSvg}></AntdIcon>;
};

TodoFill.displayName = 'TodoFill';
TodoFill.inheritAttrs = false;
export default TodoFill;