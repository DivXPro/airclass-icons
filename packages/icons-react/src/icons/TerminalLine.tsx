// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TerminalLineSvg from '@airclass/icons-svg/lib/asn/TerminalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TerminalLineSvg} />;

TerminalLine.displayName = 'TerminalLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TerminalLine);