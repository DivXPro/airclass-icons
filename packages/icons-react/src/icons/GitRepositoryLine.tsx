// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitRepositoryLineSvg from '@airclass/icons-svg/lib/asn/GitRepositoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitRepositoryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitRepositoryLineSvg} />;

GitRepositoryLine.displayName = 'GitRepositoryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitRepositoryLine);