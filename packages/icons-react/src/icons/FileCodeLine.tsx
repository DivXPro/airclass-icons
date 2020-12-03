// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileCodeLineSvg from '@airclass/icons-svg/lib/asn/FileCodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCodeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileCodeLineSvg} />;

FileCodeLine.displayName = 'FileCodeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileCodeLine);