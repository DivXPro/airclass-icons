// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlugLineSvg from '@airclass/icons-svg/lib/asn/PlugLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlugLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlugLineSvg} />;

PlugLine.displayName = 'PlugLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlugLine);