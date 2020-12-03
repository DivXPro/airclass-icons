// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShareLineSvg from '@airclass/icons-svg/lib/asn/ShareLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShareLineSvg} />;

ShareLine.displayName = 'ShareLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShareLine);