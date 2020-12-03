// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SortDescSvg from '@airclass/icons-svg/lib/asn/SortDesc';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortDesc = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortDescSvg} />;

SortDesc.displayName = 'SortDesc';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortDesc);