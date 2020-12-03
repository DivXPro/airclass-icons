// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaskLineSvg from '@airclass/icons-svg/lib/asn/TaskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskLineSvg} />;

TaskLine.displayName = 'TaskLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskLine);