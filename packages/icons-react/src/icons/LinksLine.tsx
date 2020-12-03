// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinksLineSvg from '@airclass/icons-svg/lib/asn/LinksLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinksLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinksLineSvg} />;

LinksLine.displayName = 'LinksLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinksLine);