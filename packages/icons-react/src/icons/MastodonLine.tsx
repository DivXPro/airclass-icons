// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MastodonLineSvg from '@airclass/icons-svg/lib/asn/MastodonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MastodonLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MastodonLineSvg} />;

MastodonLine.displayName = 'MastodonLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MastodonLine);