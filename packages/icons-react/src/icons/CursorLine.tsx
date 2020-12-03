// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CursorLineSvg from '@airclass/icons-svg/lib/asn/CursorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CursorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CursorLineSvg} />;

CursorLine.displayName = 'CursorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CursorLine);