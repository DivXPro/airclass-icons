// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GithubLineSvg from '@airclass/icons-svg/lib/asn/GithubLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GithubLineSvg} />;

GithubLine.displayName = 'GithubLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GithubLine);