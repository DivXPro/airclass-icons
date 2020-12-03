// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GamepadLineSvg from '@airclass/icons-svg/lib/asn/GamepadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GamepadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GamepadLineSvg} />;

GamepadLine.displayName = 'GamepadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GamepadLine);