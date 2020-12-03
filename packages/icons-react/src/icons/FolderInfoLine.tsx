// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderInfoLineSvg from '@airclass/icons-svg/lib/asn/FolderInfoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderInfoLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderInfoLineSvg} />;

FolderInfoLine.displayName = 'FolderInfoLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderInfoLine);