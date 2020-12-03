// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteRowSvg from '@airclass/icons-svg/lib/asn/DeleteRow';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteRow = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteRowSvg} />;

DeleteRow.displayName = 'DeleteRow';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteRow);