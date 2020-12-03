// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailStarLineSvg from '@airclass/icons-svg/lib/asn/MailStarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailStarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailStarLineSvg} />;

MailStarLine.displayName = 'MailStarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailStarLine);