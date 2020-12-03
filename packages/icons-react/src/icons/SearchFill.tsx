// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SearchFillSvg from '@airclass/icons-svg/lib/asn/SearchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SearchFillSvg} />;

SearchFill.displayName = 'SearchFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SearchFill);