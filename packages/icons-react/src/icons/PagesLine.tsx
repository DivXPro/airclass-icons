// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PagesLineSvg from '@airclass/icons-svg/lib/asn/PagesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PagesLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PagesLineSvg} />;

PagesLine.displayName = 'PagesLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PagesLine);