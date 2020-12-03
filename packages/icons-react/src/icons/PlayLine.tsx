// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayLineSvg from '@airclass/icons-svg/lib/asn/PlayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayLineSvg} />;

PlayLine.displayName = 'PlayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayLine);