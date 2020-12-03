// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProjectorLineSvg from '@airclass/icons-svg/lib/asn/ProjectorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectorLineSvg}></AntdIcon>;
};

ProjectorLine.displayName = 'ProjectorLine';
ProjectorLine.inheritAttrs = false;
export default ProjectorLine;