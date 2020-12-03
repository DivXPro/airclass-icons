// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyLineSvg from '@airclass/icons-svg/lib/asn/TrophyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyLineSvg} />;

TrophyLine.displayName = 'TrophyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyLine);