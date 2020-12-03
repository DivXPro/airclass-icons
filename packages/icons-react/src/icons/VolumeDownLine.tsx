// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VolumeDownLineSvg from '@airclass/icons-svg/lib/asn/VolumeDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeDownLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VolumeDownLineSvg} />;

VolumeDownLine.displayName = 'VolumeDownLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VolumeDownLine);