// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EvernoteLineSvg from '@airclass/icons-svg/lib/asn/EvernoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EvernoteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EvernoteLineSvg} />;

EvernoteLine.displayName = 'EvernoteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EvernoteLine);