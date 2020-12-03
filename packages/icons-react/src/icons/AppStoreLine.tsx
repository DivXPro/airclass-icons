// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppStoreLineSvg from '@airclass/icons-svg/lib/asn/AppStoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppStoreLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppStoreLineSvg} />;

AppStoreLine.displayName = 'AppStoreLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppStoreLine);