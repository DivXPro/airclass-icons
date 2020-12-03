// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExternalLinkLineSvg from '@airclass/icons-svg/lib/asn/ExternalLinkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExternalLinkLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExternalLinkLineSvg} />;

ExternalLinkLine.displayName = 'ExternalLinkLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExternalLinkLine);