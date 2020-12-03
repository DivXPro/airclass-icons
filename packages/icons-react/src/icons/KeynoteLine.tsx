// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KeynoteLineSvg from '@airclass/icons-svg/lib/asn/KeynoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeynoteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KeynoteLineSvg} />;

KeynoteLine.displayName = 'KeynoteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KeynoteLine);