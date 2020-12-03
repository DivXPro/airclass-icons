// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClipboardLineSvg from '@airclass/icons-svg/lib/asn/ClipboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClipboardLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClipboardLineSvg} />;

ClipboardLine.displayName = 'ClipboardLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClipboardLine);