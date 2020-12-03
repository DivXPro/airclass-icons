// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarLineSvg from '@airclass/icons-svg/lib/asn/StarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarLineSvg} />;

StarLine.displayName = 'StarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarLine);