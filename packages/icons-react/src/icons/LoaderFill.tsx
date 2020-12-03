// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoaderFillSvg from '@airclass/icons-svg/lib/asn/LoaderFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoaderFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoaderFillSvg} />;

LoaderFill.displayName = 'LoaderFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoaderFill);