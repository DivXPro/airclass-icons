// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlarmLineSvg from '@airclass/icons-svg/lib/asn/AlarmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlarmLineSvg} />;

AlarmLine.displayName = 'AlarmLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlarmLine);