// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckboxLineSvg from '@airclass/icons-svg/lib/asn/CheckboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckboxLineSvg} />;

CheckboxLine.displayName = 'CheckboxLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckboxLine);