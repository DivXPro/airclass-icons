// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PolaroidLineSvg from '@airclass/icons-svg/lib/asn/PolaroidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PolaroidLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PolaroidLineSvg} />;

PolaroidLine.displayName = 'PolaroidLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PolaroidLine);