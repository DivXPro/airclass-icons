// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoaderLineSvg from '@airclass/icons-svg/lib/asn/LoaderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoaderLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoaderLineSvg} />;

LoaderLine.displayName = 'LoaderLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoaderLine);