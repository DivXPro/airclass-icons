// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DossierLineSvg from '@airclass/icons-svg/lib/asn/DossierLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DossierLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DossierLineSvg} />;

DossierLine.displayName = 'DossierLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DossierLine);