// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EarthquakeLineSvg from '@airclass/icons-svg/lib/asn/EarthquakeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthquakeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EarthquakeLineSvg} />;

EarthquakeLine.displayName = 'EarthquakeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EarthquakeLine);