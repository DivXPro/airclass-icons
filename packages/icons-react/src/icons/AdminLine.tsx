// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AdminLineSvg from '@airclass/icons-svg/lib/asn/AdminLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdminLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AdminLineSvg} />;

AdminLine.displayName = 'AdminLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AdminLine);