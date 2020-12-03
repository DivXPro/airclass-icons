// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileInfoLineSvg from '@airclass/icons-svg/lib/asn/FileInfoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileInfoLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileInfoLineSvg} />;

FileInfoLine.displayName = 'FileInfoLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileInfoLine);