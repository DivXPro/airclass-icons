// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RefreshLineSvg from '@airclass/icons-svg/lib/asn/RefreshLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefreshLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RefreshLineSvg} />;

RefreshLine.displayName = 'RefreshLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RefreshLine);