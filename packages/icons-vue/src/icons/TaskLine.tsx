// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaskLineSvg from '@airclass/icons-svg/lib/asn/TaskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskLineSvg}></AntdIcon>;
};

TaskLine.displayName = 'TaskLine';
TaskLine.inheritAttrs = false;
export default TaskLine;