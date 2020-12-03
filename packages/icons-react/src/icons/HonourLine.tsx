// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HonourLineSvg from '@airclass/icons-svg/lib/asn/HonourLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HonourLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HonourLineSvg} />;

HonourLine.displayName = 'HonourLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HonourLine);