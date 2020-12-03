// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MistLineSvg from '@airclass/icons-svg/lib/asn/MistLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MistLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MistLineSvg} />;

MistLine.displayName = 'MistLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MistLine);