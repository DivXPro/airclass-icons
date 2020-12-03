// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscussLineSvg from '@airclass/icons-svg/lib/asn/DiscussLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscussLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscussLineSvg} />;

DiscussLine.displayName = 'DiscussLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscussLine);