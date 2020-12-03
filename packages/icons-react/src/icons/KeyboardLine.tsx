// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KeyboardLineSvg from '@airclass/icons-svg/lib/asn/KeyboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyboardLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KeyboardLineSvg} />;

KeyboardLine.displayName = 'KeyboardLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KeyboardLine);