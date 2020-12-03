// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileLineSvg from '@airclass/icons-svg/lib/asn/FileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileLineSvg} />;

FileLine.displayName = 'FileLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileLine);