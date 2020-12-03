// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayListLineSvg from '@airclass/icons-svg/lib/asn/PlayListLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayListLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayListLineSvg} />;

PlayListLine.displayName = 'PlayListLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayListLine);