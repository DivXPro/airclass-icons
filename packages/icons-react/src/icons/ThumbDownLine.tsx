// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThumbDownLineSvg from '@airclass/icons-svg/lib/asn/ThumbDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbDownLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThumbDownLineSvg} />;

ThumbDownLine.displayName = 'ThumbDownLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ThumbDownLine);