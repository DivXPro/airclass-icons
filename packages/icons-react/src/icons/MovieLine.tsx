// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MovieLineSvg from '@airclass/icons-svg/lib/asn/MovieLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MovieLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MovieLineSvg} />;

MovieLine.displayName = 'MovieLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MovieLine);