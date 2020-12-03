// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MarkdownLineSvg from '@airclass/icons-svg/lib/asn/MarkdownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkdownLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MarkdownLineSvg} />;

MarkdownLine.displayName = 'MarkdownLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MarkdownLine);