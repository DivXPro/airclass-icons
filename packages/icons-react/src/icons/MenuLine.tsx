// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenuLineSvg from '@airclass/icons-svg/lib/asn/MenuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuLineSvg} />;

MenuLine.displayName = 'MenuLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuLine);