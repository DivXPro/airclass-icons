// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookLineSvg from '@airclass/icons-svg/lib/asn/BookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookLineSvg} />;

BookLine.displayName = 'BookLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookLine);