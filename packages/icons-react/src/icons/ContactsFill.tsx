// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsFillSvg from '@airclass/icons-svg/lib/asn/ContactsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsFillSvg} />;

ContactsFill.displayName = 'ContactsFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsFill);