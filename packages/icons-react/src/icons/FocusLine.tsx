// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FocusLineSvg from '@airclass/icons-svg/lib/asn/FocusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FocusLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FocusLineSvg} />;

FocusLine.displayName = 'FocusLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FocusLine);