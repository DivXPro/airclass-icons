// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailUnreadLineSvg from '@airclass/icons-svg/lib/asn/MailUnreadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailUnreadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailUnreadLineSvg} />;

MailUnreadLine.displayName = 'MailUnreadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailUnreadLine);