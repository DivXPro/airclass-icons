// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ItalicSvg from '@airclass/icons-svg/lib/asn/Italic';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Italic = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ItalicSvg} />;

Italic.displayName = 'Italic';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Italic);