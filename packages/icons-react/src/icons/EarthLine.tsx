// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EarthLineSvg from '@airclass/icons-svg/lib/asn/EarthLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EarthLineSvg} />;

EarthLine.displayName = 'EarthLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EarthLine);