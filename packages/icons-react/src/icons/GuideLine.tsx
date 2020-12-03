// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GuideLineSvg from '@airclass/icons-svg/lib/asn/GuideLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GuideLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GuideLineSvg} />;

GuideLine.displayName = 'GuideLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GuideLine);