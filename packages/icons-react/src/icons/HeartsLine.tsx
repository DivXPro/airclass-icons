// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartsLineSvg from '@airclass/icons-svg/lib/asn/HeartsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartsLineSvg} />;

HeartsLine.displayName = 'HeartsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartsLine);