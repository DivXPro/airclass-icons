// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookReadLineSvg from '@airclass/icons-svg/lib/asn/BookReadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookReadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookReadLineSvg} />;

BookReadLine.displayName = 'BookReadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookReadLine);