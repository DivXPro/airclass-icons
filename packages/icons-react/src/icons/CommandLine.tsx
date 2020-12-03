// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CommandLineSvg from '@airclass/icons-svg/lib/asn/CommandLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommandLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommandLineSvg} />;

CommandLine.displayName = 'CommandLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CommandLine);