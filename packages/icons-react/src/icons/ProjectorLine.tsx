// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProjectorLineSvg from '@airclass/icons-svg/lib/asn/ProjectorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectorLineSvg} />;

ProjectorLine.displayName = 'ProjectorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectorLine);