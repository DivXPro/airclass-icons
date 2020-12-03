// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TodoLineSvg from '@airclass/icons-svg/lib/asn/TodoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TodoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TodoLineSvg}></AntdIcon>;
};

TodoLine.displayName = 'TodoLine';
TodoLine.inheritAttrs = false;
export default TodoLine;