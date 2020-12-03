// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HashtagSvg from '@airclass/icons-svg/lib/asn/Hashtag';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Hashtag = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HashtagSvg} />;

Hashtag.displayName = 'Hashtag';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Hashtag);