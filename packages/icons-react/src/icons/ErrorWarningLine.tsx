// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ErrorWarningLineSvg from '@airclass/icons-svg/lib/asn/ErrorWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorWarningLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorWarningLineSvg} />;

ErrorWarningLine.displayName = 'ErrorWarningLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorWarningLine);