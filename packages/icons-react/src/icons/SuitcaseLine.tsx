// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SuitcaseLineSvg from '@airclass/icons-svg/lib/asn/SuitcaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuitcaseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SuitcaseLineSvg} />;

SuitcaseLine.displayName = 'SuitcaseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SuitcaseLine);