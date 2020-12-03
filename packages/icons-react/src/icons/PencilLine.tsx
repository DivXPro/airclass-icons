// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PencilLineSvg from '@airclass/icons-svg/lib/asn/PencilLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PencilLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PencilLineSvg} />;

PencilLine.displayName = 'PencilLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PencilLine);