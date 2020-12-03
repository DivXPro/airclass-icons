// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EraserLineSvg from '@airclass/icons-svg/lib/asn/EraserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EraserLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EraserLineSvg} />;

EraserLine.displayName = 'EraserLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EraserLine);