// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TestTubeLineSvg from '@airclass/icons-svg/lib/asn/TestTubeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TestTubeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TestTubeLineSvg} />;

TestTubeLine.displayName = 'TestTubeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TestTubeLine);