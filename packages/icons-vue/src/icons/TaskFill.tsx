// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaskFillSvg from '@airclass/icons-svg/lib/asn/TaskFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskFillSvg}></AntdIcon>;
};

TaskFill.displayName = 'TaskFill';
TaskFill.inheritAttrs = false;
export default TaskFill;