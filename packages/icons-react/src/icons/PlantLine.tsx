// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlantLineSvg from '@airclass/icons-svg/lib/asn/PlantLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlantLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlantLineSvg} />;

PlantLine.displayName = 'PlantLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlantLine);