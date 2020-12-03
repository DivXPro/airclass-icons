// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StrikethroughSvg from '@airclass/icons-svg/lib/asn/Strikethrough';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Strikethrough = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StrikethroughSvg} />;

Strikethrough.displayName = 'Strikethrough';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Strikethrough);