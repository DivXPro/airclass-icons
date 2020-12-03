// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailLockLineSvg from '@airclass/icons-svg/lib/asn/MailLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailLockLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailLockLineSvg} />;

MailLockLine.displayName = 'MailLockLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailLockLine);