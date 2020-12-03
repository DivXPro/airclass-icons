// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitCommitLineSvg from '@airclass/icons-svg/lib/asn/GitCommitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitCommitLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitCommitLineSvg} />;

GitCommitLine.displayName = 'GitCommitLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitCommitLine);