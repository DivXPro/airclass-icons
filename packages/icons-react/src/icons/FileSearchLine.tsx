// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileSearchLineSvg from '@airclass/icons-svg/lib/asn/FileSearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSearchLineSvg} />;

FileSearchLine.displayName = 'FileSearchLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSearchLine);