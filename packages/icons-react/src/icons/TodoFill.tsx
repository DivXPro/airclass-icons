// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TodoFillSvg from '@airclass/icons-svg/lib/asn/TodoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TodoFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TodoFillSvg} />;

TodoFill.displayName = 'TodoFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TodoFill);