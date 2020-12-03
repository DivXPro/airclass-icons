// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileCloudLineSvg from '@airclass/icons-svg/lib/asn/FileCloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCloudLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileCloudLineSvg} />;

FileCloudLine.displayName = 'FileCloudLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileCloudLine);