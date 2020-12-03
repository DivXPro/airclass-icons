// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailLineSvg from '@airclass/icons-svg/lib/asn/MailLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailLineSvg} />;

MailLine.displayName = 'MailLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailLine);