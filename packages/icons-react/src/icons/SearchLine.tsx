// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SearchLineSvg from '@airclass/icons-svg/lib/asn/SearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SearchLineSvg} />;

SearchLine.displayName = 'SearchLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SearchLine);