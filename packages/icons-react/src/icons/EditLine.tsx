// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EditLineSvg from '@airclass/icons-svg/lib/asn/EditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditLineSvg} />;

EditLine.displayName = 'EditLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EditLine);