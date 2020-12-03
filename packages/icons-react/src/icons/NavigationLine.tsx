// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NavigationLineSvg from '@airclass/icons-svg/lib/asn/NavigationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NavigationLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NavigationLineSvg} />;

NavigationLine.displayName = 'NavigationLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NavigationLine);