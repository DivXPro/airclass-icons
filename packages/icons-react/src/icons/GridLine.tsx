// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GridLineSvg from '@airclass/icons-svg/lib/asn/GridLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GridLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GridLineSvg} />;

GridLine.displayName = 'GridLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GridLine);