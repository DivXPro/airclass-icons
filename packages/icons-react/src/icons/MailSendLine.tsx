// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailSendLineSvg from '@airclass/icons-svg/lib/asn/MailSendLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailSendLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailSendLineSvg} />;

MailSendLine.displayName = 'MailSendLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailSendLine);