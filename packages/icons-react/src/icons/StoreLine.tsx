// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StoreLineSvg from '@airclass/icons-svg/lib/asn/StoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StoreLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StoreLineSvg} />;

StoreLine.displayName = 'StoreLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StoreLine);