// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ListCheckSvg from '@airclass/icons-svg/lib/asn/ListCheck';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListCheck = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ListCheckSvg} />;

ListCheck.displayName = 'ListCheck';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ListCheck);