// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StickyNoteLineSvg from '@airclass/icons-svg/lib/asn/StickyNoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StickyNoteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StickyNoteLineSvg} />;

StickyNoteLine.displayName = 'StickyNoteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StickyNoteLine);