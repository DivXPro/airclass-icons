// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MindMapSvg from '@airclass/icons-svg/lib/asn/MindMap';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MindMap = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MindMapSvg} />;

MindMap.displayName = 'MindMap';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MindMap);