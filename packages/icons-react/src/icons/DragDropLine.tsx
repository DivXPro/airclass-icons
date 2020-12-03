// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DragDropLineSvg from '@airclass/icons-svg/lib/asn/DragDropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragDropLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DragDropLineSvg} />;

DragDropLine.displayName = 'DragDropLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DragDropLine);