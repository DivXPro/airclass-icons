// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageLineSvg from '@airclass/icons-svg/lib/asn/MessageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageLineSvg} />;

MessageLine.displayName = 'MessageLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageLine);