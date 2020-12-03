// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileAddLineSvg from '@airclass/icons-svg/lib/asn/FileAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileAddLineSvg} />;

FileAddLine.displayName = 'FileAddLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileAddLine);