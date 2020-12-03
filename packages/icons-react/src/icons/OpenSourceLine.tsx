// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OpenSourceLineSvg from '@airclass/icons-svg/lib/asn/OpenSourceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenSourceLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpenSourceLineSvg} />;

OpenSourceLine.displayName = 'OpenSourceLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OpenSourceLine);