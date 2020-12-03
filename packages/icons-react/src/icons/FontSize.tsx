// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FontSizeSvg from '@airclass/icons-svg/lib/asn/FontSize';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontSize = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FontSizeSvg} />;

FontSize.displayName = 'FontSize';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FontSize);