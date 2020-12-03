// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscordLineSvg from '@airclass/icons-svg/lib/asn/DiscordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscordLineSvg} />;

DiscordLine.displayName = 'DiscordLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscordLine);