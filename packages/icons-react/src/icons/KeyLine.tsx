// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KeyLineSvg from '@airclass/icons-svg/lib/asn/KeyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KeyLineSvg} />;

KeyLine.displayName = 'KeyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KeyLine);