// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitBranchLineSvg from '@airclass/icons-svg/lib/asn/GitBranchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitBranchLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitBranchLineSvg} />;

GitBranchLine.displayName = 'GitBranchLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitBranchLine);