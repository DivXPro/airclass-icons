// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FontColorSvg from '@airclass/icons-svg/lib/asn/FontColor';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontColor = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FontColorSvg} />;

FontColor.displayName = 'FontColor';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FontColor);