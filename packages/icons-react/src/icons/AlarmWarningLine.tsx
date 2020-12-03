// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlarmWarningLineSvg from '@airclass/icons-svg/lib/asn/AlarmWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmWarningLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlarmWarningLineSvg} />;

AlarmWarningLine.displayName = 'AlarmWarningLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlarmWarningLine);