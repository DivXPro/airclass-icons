// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IeLineSvg from '@airclass/icons-svg/lib/asn/IeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IeLineSvg} />;

IeLine.displayName = 'IeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IeLine);