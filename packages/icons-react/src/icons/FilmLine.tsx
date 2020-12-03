// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilmLineSvg from '@airclass/icons-svg/lib/asn/FilmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilmLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilmLineSvg} />;

FilmLine.displayName = 'FilmLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilmLine);