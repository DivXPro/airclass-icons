// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkSvg from '@airclass/icons-svg/lib/asn/Link';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Link = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkSvg} />;

Link.displayName = 'Link';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Link);