// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeLineSvg from '@airclass/icons-svg/lib/asn/HomeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeLineSvg} />;

HomeLine.displayName = 'HomeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeLine);