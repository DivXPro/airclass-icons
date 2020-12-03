// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReplyLineSvg from '@airclass/icons-svg/lib/asn/ReplyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReplyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReplyLineSvg} />;

ReplyLine.displayName = 'ReplyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReplyLine);