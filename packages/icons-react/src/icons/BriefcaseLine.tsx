// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BriefcaseLineSvg from '@airclass/icons-svg/lib/asn/BriefcaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BriefcaseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BriefcaseLineSvg} />;

BriefcaseLine.displayName = 'BriefcaseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BriefcaseLine);