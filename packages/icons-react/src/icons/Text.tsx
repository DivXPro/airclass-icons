// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TextSvg from '@airclass/icons-svg/lib/asn/Text';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Text = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TextSvg} />;

Text.displayName = 'Text';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Text);