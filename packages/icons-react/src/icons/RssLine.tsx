// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RssLineSvg from '@airclass/icons-svg/lib/asn/RssLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RssLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RssLineSvg} />;

RssLine.displayName = 'RssLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RssLine);