// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThumbUpLineSvg from '@airclass/icons-svg/lib/asn/ThumbUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbUpLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThumbUpLineSvg} />;

ThumbUpLine.displayName = 'ThumbUpLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ThumbUpLine);