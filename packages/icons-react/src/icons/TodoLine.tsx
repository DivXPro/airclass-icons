// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TodoLineSvg from '@airclass/icons-svg/lib/asn/TodoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TodoLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TodoLineSvg} />;

TodoLine.displayName = 'TodoLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TodoLine);