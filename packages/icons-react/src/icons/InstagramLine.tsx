// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InstagramLineSvg from '@airclass/icons-svg/lib/asn/InstagramLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InstagramLineSvg} />;

InstagramLine.displayName = 'InstagramLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InstagramLine);