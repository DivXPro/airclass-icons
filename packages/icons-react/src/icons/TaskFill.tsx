// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaskFillSvg from '@airclass/icons-svg/lib/asn/TaskFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskFillSvg} />;

TaskFill.displayName = 'TaskFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskFill);