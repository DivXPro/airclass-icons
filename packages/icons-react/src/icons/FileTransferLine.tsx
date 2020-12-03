// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTransferLineSvg from '@airclass/icons-svg/lib/asn/FileTransferLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTransferLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTransferLineSvg} />;

FileTransferLine.displayName = 'FileTransferLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTransferLine);