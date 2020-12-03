// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageFillSvg from '@airclass/icons-svg/lib/asn/MessageFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageFillSvg} />;

MessageFill.displayName = 'MessageFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageFill);