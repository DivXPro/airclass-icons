// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitMergeLineSvg from '@airclass/icons-svg/lib/asn/GitMergeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitMergeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitMergeLineSvg} />;

GitMergeLine.displayName = 'GitMergeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitMergeLine);