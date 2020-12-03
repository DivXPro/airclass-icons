// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HandbagLineSvg from '@airclass/icons-svg/lib/asn/HandbagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandbagLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HandbagLineSvg} />;

HandbagLine.displayName = 'HandbagLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HandbagLine);