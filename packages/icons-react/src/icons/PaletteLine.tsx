// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PaletteLineSvg from '@airclass/icons-svg/lib/asn/PaletteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaletteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PaletteLineSvg} />;

PaletteLine.displayName = 'PaletteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PaletteLine);