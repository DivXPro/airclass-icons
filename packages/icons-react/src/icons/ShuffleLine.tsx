// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShuffleLineSvg from '@airclass/icons-svg/lib/asn/ShuffleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShuffleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShuffleLineSvg} />;

ShuffleLine.displayName = 'ShuffleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShuffleLine);