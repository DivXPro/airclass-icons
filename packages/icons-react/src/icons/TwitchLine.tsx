// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitchLineSvg from '@airclass/icons-svg/lib/asn/TwitchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitchLineSvg} />;

TwitchLine.displayName = 'TwitchLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitchLine);