// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FinderLineSvg from '@airclass/icons-svg/lib/asn/FinderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FinderLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FinderLineSvg} />;

FinderLine.displayName = 'FinderLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FinderLine);