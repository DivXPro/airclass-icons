// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileWarningLineSvg from '@airclass/icons-svg/lib/asn/FileWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWarningLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileWarningLineSvg} />;

FileWarningLine.displayName = 'FileWarningLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileWarningLine);