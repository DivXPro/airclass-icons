// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileUploadLineSvg from '@airclass/icons-svg/lib/asn/FileUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUploadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileUploadLineSvg} />;

FileUploadLine.displayName = 'FileUploadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileUploadLine);