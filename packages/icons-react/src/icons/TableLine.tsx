// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TableLineSvg from '@airclass/icons-svg/lib/asn/TableLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TableLineSvg} />;

TableLine.displayName = 'TableLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TableLine);