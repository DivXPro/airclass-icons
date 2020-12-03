// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MagicLineSvg from '@airclass/icons-svg/lib/asn/MagicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MagicLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MagicLineSvg} />;

MagicLine.displayName = 'MagicLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MagicLine);