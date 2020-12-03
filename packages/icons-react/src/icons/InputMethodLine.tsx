// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InputMethodLineSvg from '@airclass/icons-svg/lib/asn/InputMethodLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InputMethodLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InputMethodLineSvg} />;

InputMethodLine.displayName = 'InputMethodLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InputMethodLine);