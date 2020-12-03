// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderLineSvg from '@airclass/icons-svg/lib/asn/FolderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderLineSvg} />;

FolderLine.displayName = 'FolderLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderLine);