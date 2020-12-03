// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VimeoLineSvg from '@airclass/icons-svg/lib/asn/VimeoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VimeoLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VimeoLineSvg} />;

VimeoLine.displayName = 'VimeoLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VimeoLine);