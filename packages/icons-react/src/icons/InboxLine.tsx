// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InboxLineSvg from '@airclass/icons-svg/lib/asn/InboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InboxLineSvg} />;

InboxLine.displayName = 'InboxLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InboxLine);