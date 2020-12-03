// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileLockLineSvg from '@airclass/icons-svg/lib/asn/FileLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileLockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileLockLineSvg} />;

FileLockLine.displayName = 'FileLockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileLockLine);