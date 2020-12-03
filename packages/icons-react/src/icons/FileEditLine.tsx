// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileEditLineSvg from '@airclass/icons-svg/lib/asn/FileEditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileEditLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileEditLineSvg} />;

FileEditLine.displayName = 'FileEditLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileEditLine);