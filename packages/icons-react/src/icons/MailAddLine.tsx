// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailAddLineSvg from '@airclass/icons-svg/lib/asn/MailAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailAddLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailAddLineSvg} />;

MailAddLine.displayName = 'MailAddLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailAddLine);