// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailCheckLineSvg from '@airclass/icons-svg/lib/asn/MailCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailCheckLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailCheckLineSvg} />;

MailCheckLine.displayName = 'MailCheckLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailCheckLine);