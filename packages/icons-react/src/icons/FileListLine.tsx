// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileListLineSvg from '@airclass/icons-svg/lib/asn/FileListLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileListLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileListLineSvg} />;

FileListLine.displayName = 'FileListLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileListLine);