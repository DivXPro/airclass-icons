// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditLineSvg from '@airclass/icons-svg/lib/asn/RedditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditLineSvg} />;

RedditLine.displayName = 'RedditLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditLine);