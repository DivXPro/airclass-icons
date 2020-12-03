// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PageSeparatorSvg from '@airclass/icons-svg/lib/asn/PageSeparator';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PageSeparator = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PageSeparatorSvg} />;

PageSeparator.displayName = 'PageSeparator';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PageSeparator);