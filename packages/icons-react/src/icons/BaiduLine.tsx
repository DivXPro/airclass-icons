// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BaiduLineSvg from '@airclass/icons-svg/lib/asn/BaiduLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaiduLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BaiduLineSvg} />;

BaiduLine.displayName = 'BaiduLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BaiduLine);