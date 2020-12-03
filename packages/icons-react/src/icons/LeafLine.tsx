// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeafLineSvg from '@airclass/icons-svg/lib/asn/LeafLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeafLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeafLineSvg} />;

LeafLine.displayName = 'LeafLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeafLine);