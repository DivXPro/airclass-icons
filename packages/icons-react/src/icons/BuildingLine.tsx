// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BuildingLineSvg from '@airclass/icons-svg/lib/asn/BuildingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildingLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildingLineSvg} />;

BuildingLine.displayName = 'BuildingLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildingLine);