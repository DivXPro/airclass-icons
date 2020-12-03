// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EmpathizeLineSvg from '@airclass/icons-svg/lib/asn/EmpathizeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmpathizeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EmpathizeLineSvg} />;

EmpathizeLine.displayName = 'EmpathizeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EmpathizeLine);