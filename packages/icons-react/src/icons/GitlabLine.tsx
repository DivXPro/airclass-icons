// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitlabLineSvg from '@airclass/icons-svg/lib/asn/GitlabLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitlabLineSvg} />;

GitlabLine.displayName = 'GitlabLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitlabLine);