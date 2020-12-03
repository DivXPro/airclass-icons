// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SteamLineSvg from '@airclass/icons-svg/lib/asn/SteamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteamLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SteamLineSvg} />;

SteamLine.displayName = 'SteamLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SteamLine);