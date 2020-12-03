// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileHistoryLineSvg from '@airclass/icons-svg/lib/asn/FileHistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileHistoryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileHistoryLineSvg} />;

FileHistoryLine.displayName = 'FileHistoryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileHistoryLine);