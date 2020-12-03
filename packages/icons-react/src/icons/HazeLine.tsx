// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HazeLineSvg from '@airclass/icons-svg/lib/asn/HazeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HazeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HazeLineSvg} />;

HazeLine.displayName = 'HazeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HazeLine);