// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderLockLineSvg from '@airclass/icons-svg/lib/asn/FolderLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderLockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderLockLineSvg} />;

FolderLockLine.displayName = 'FolderLockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderLockLine);