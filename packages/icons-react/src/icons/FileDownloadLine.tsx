// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileDownloadLineSvg from '@airclass/icons-svg/lib/asn/FileDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDownloadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileDownloadLineSvg} />;

FileDownloadLine.displayName = 'FileDownloadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileDownloadLine);