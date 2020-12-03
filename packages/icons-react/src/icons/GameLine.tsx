// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GameLineSvg from '@airclass/icons-svg/lib/asn/GameLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GameLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GameLineSvg} />;

GameLine.displayName = 'GameLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GameLine);