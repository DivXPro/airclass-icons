// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FoldersLineSvg from '@airclass/icons-svg/lib/asn/FoldersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoldersLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FoldersLineSvg} />;

FoldersLine.displayName = 'FoldersLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FoldersLine);