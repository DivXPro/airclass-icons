// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpamLineSvg from '@airclass/icons-svg/lib/asn/SpamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpamLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpamLineSvg} />;

SpamLine.displayName = 'SpamLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpamLine);