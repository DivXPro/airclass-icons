// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EmphasisSvg from '@airclass/icons-svg/lib/asn/Emphasis';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Emphasis = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EmphasisSvg} />;

Emphasis.displayName = 'Emphasis';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Emphasis);