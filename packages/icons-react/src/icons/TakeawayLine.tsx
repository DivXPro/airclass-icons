// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TakeawayLineSvg from '@airclass/icons-svg/lib/asn/TakeawayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TakeawayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TakeawayLineSvg} />;

TakeawayLine.displayName = 'TakeawayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TakeawayLine);