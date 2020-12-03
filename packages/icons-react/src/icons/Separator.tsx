// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SeparatorSvg from '@airclass/icons-svg/lib/asn/Separator';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Separator = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SeparatorSvg} />;

Separator.displayName = 'Separator';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Separator);