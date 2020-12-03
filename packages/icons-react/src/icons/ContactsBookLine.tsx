// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsBookLineSvg from '@airclass/icons-svg/lib/asn/ContactsBookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsBookLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsBookLineSvg} />;

ContactsBookLine.displayName = 'ContactsBookLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsBookLine);