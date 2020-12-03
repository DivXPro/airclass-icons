// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EarthFillSvg from '@airclass/icons-svg/lib/asn/EarthFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EarthFillSvg} />;

EarthFill.displayName = 'EarthFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EarthFill);