// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpeakerLineSvg from '@airclass/icons-svg/lib/asn/SpeakerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeakerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpeakerLineSvg} />;

SpeakerLine.displayName = 'SpeakerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpeakerLine);