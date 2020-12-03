// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArticleLineSvg from '@airclass/icons-svg/lib/asn/ArticleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArticleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArticleLineSvg} />;

ArticleLine.displayName = 'ArticleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArticleLine);