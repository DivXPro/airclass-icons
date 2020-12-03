// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpeakerFillSvg from '@airclass/icons-svg/lib/asn/SpeakerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeakerFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpeakerFillSvg} />;

SpeakerFill.displayName = 'SpeakerFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpeakerFill);