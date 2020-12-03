// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CropLineSvg from '@airclass/icons-svg/lib/asn/CropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CropLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CropLineSvg} />;

CropLine.displayName = 'CropLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CropLine);